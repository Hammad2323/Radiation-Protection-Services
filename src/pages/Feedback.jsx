import React, { useEffect, useState } from "react";
import { Star, X } from "lucide-react";

const StarRating = ({ value, onChange }) => {
  const [hover, setHover] = useState(null);

  return (
    <div className="flex gap-1 justify-center">
      {[1, 2, 3, 4, 5].map((n) => {
        const active = (hover ?? value) >= n;
        return (
          <button
            key={n}
            type="button"
            aria-label={`${n} star`}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(null)}
            onClick={() => onChange(n)}
            className="p-1"
          >
            <Star
              className={`w-7 h-7 transition-transform ${
                active
                  ? "fill-blue-500 stroke-blue-500 scale-105"
                  : "stroke-gray-400"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

const FeedbackPage = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  const [allRatings, setAllRatings] = useState([]);
  const [fiveStarFeedback, setFiveStarFeedback] = useState([]);

  useEffect(() => {
    try {
      const r = JSON.parse(localStorage.getItem("allRatings") || "[]");
      const f = JSON.parse(localStorage.getItem("fiveStarFeedback") || "[]");
      setAllRatings(r);
      setFiveStarFeedback(f);
    } catch {}
  }, []);

  const saveToStorage = (key, data) =>
    localStorage.setItem(key, JSON.stringify(data));

  // enforce maximum items in list
  const enforceLimit = (list, key, limit) => {
    if (list.length > limit) {
      const fresh = list.slice(0, limit); // keep newest at top
      saveToStorage(key, fresh);
      return fresh;
    }
    return list;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) return;

    const id = Date.now();
    const date = new Date().toISOString();

    // save rating
    let nextRatings = [{ id, name: name.trim(), rating, date }, ...allRatings];
    nextRatings = enforceLimit(nextRatings, "allRatings", 50);
    setAllRatings(nextRatings);
    saveToStorage("allRatings", nextRatings);

    // save text feedback if 5 stars
    if (rating === 5 && text.trim()) {
      let nextFb = [
        {
          id,
          name: name.trim() || "Anonymous",
          text: text.trim(),
          rating: 5,
          date,
        },
        ...fiveStarFeedback,
      ];
      // keep only 10 newest written feedbacks
      nextFb = enforceLimit(nextFb, "fiveStarFeedback", 10);
      setFiveStarFeedback(nextFb);
      saveToStorage("fiveStarFeedback", nextFb);
    }

    // reset form
    setName("");
    setRating(0);
    setText("");
  };

  const removeFeedback = (id) => {
    const updated = fiveStarFeedback.filter((f) => f.id !== id);
    setFiveStarFeedback(updated);
    saveToStorage("fiveStarFeedback", updated);
  };

  // ====== Rating breakdown logic =======
  const totalRatings = allRatings.length;
  const averageRating =
    totalRatings > 0
      ? (
          allRatings.reduce((acc, r) => acc + r.rating, 0) / totalRatings
        ).toFixed(1)
      : 0;

  const starCounts = [1, 2, 3, 4, 5].map(
    (n) => allRatings.filter((r) => r.rating === n).length
  );

  const renderStars = (value) => {
    const val = parseFloat(value);
    const fullStars = Math.floor(val);
    const hasHalf = val - fullStars >= 0.5;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="w-6 h-6 fill-blue-500 stroke-blue-500"
        />
      );
    }
    if (hasHalf) {
      stars.push(
        <Star
          key="half"
          className="w-6 h-6 fill-blue-200 stroke-blue-500"
        />
      );
    }
    while (stars.length < 5) {
      stars.push(
        <Star
          key={`empty-${stars.length}`}
          className="w-6 h-6 stroke-gray-300"
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur rounded-2xl shadow-xl p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700">
          Customer Ratings & Feedback
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Rate your experience from 1 to 5 stars.
        </p>

        {/* Rating breakdown */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left */}
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-6xl font-extrabold text-blue-600">
              {averageRating}
            </div>
            <div className="flex justify-center md:justify-start mt-2">
              {renderStars(averageRating)}
            </div>
            <div className="text-gray-500 mt-1 text-sm">
              {totalRatings} ratings total
            </div>
          </div>

          {/* Right */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = starCounts[star - 1];
              const percent =
                totalRatings > 0 ? (count / totalRatings) * 100 : 0;
              return (
                <div key={star} className="flex items-center gap-2">
                  <span className="w-5 text-sm font-medium text-gray-700">
                    {star}
                  </span>
                  <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                  <span className="w-8 text-right text-sm text-gray-500">
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feedback form */}
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your name (optional)
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-blue-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="e.g. Asif"
            />
          </div>

          <div className="text-center">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your rating
            </label>
            <StarRating value={rating} onChange={setRating} />
          </div>

          {rating === 5 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your feedback (optional)
              </label>
              <textarea
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full rounded-xl border border-blue-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Write what you loved…"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 shadow-md transition"
            disabled={!rating}
          >
            Submit Feedback
          </button>
        </form>

        {/* 5-star feedback */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-blue-700">
            Customer 5★ Feedback
          </h2>
          {fiveStarFeedback.length === 0 ? (
            <p className="text-gray-600 mt-2">No 5★ written feedback yet.</p>
          ) : (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {fiveStarFeedback.map((fb) => (
                <div
                  key={fb.id}
                  className="relative rounded-xl border border-blue-100 p-4 shadow-sm bg-white"
                >
                  <button
                    onClick={() => removeFeedback(fb.id)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                  >
                    <X size={16} />
                  </button>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-blue-500 stroke-blue-500"
                      />
                    ))}
                  </div>
                  <p className="text-gray-800">{fb.text}</p>
                  <div className="mt-3 text-xs text-gray-500">
                    — {fb.name} · {new Date(fb.date).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default FeedbackPage;

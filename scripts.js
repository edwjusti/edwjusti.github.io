import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const cards = document.querySelectorAll(".card");

for (const card of cards) {
  const cardAvatar = card.querySelector(".avatar");

  const timeline = new ViewTimeline({
    subject: card,
  });

  const cardAnimation = card.animate(
    [
      {
        transform: "scale(0.7)",
        opacity: 0,
      },
      {
        transform: "scale(1)",
        opacity: 1,
      },
    ],
    {
      fill: "both",
      timeline,
      rangeStart: "entry 0%",
      rangeEnd: "entry 70%",
    },
  );

  const cardAvatarAnimation = cardAvatar.animate(
    [
      {
        transform: "translateX(-50%) rotate(-45deg)",
      },
      {
        transform: "translateX(0) rotate(0deg)",
      },
    ],
    {
      fill: "both",
      timeline,
      rangeStart: "entry 0%",
      rangeEnd: "entry 70%",
    },
  );

  cardAnimation.addEventListener(
    "finish",
    () => {
      cardAnimation.commitStyles();
      cardAnimation.cancel();
    },
    { once: true },
  );

  cardAvatarAnimation.addEventListener(
    "finish",
    () => {
      cardAvatarAnimation.commitStyles();
      cardAvatarAnimation.cancel();
    },
    { once: true },
  );
}

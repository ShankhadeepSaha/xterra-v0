export const lerp = (a, b, n) => (1 - n) * a + n * b;

export const getMousePos = (ev) => {
  return {
    x: ev.clientX,
    y: ev.clientY,
  };
};

export const calcWinsize = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

export const distance = (x1, y1, x2, y2) => {
  const a = x1 - x2;
  const b = y1 - y2;
  return Math.hypot(a, b);
};

export const getRandomFloat = (min, max) =>
  (Math.random() * (max - min) + min).toFixed(2);
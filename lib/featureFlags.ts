function isJan1st2026IST() {
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  return (
    now.getFullYear() === 2026 &&
    now.getMonth() === 0 &&
    now.getDate() === 1
  );
}

export const FEATURES = {
  NEW_YEAR_THEME: false,
};

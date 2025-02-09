export const getWebsites = (req, res) => {
  const websites = [
    { id: 1, name: "Google", url: "https://www.google.com" },
    { id: 2, name: "GitHub", url: "https://www.github.com" },
    { id: 3, name: "Stack Overflow", url: "https://stackoverflow.com" },
  ];
  res.json(websites);
};

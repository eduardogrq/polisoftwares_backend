import websites from "../data/websites.json" assert { type: "json" };

const getWebsites = (req, res) => {
  res.json(websites);
};

const getWebsitesByName = (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Name query param is required" });
  }

  const matchingWebsites = websites.filter((website) =>
    website.name.toLowerCase().includes(name.toLowerCase())
  );

  if (matchingWebsites.length > 0) {
    res.json(matchingWebsites);
  } else {
    res.status(404).json({ error: "No matching websites found" });
  }
};

export { getWebsites, getWebsitesByName };

import websites from "../data/websites.json" assert { type: "json" };

const getWebsites = (req, res) => {
  const updatedWebsites = websites.map((website) => ({
    ...website,
    icon: `ic_${website.id}.svg`,
  }));

  res.json(updatedWebsites);
};

const getWebsitesByName = (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Name query param is required" });
  }

  const matchingWebsites = websites
    .filter((website) =>
      website.name.toLowerCase().includes(name.toLowerCase())
    )
    .map((website) => ({
      ...website,
      icon: `ic_${website.id}.svg`,
    }));

  res.json(matchingWebsites);
};

export { getWebsites, getWebsitesByName };

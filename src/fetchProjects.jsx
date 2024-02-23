import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE,
  environment: 'master',
  accessToken: import.meta.env.VITE_CONTENTFUL_TOKEN,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const data = response.items.map((item) => {
        const { id } = item.sys;
        const { title, url, image, text, github } = item.fields;
        const img = image?.fields?.file?.url;

        return { id, title, url, img, text, github };
      });

      setProjects(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};

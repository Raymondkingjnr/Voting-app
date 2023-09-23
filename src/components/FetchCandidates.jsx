import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "d7lzs6qggye2",
  environment: "master",
  accessToken: "t4oUCqE8tJBO-vQRzkelsKclMIQDe9ZQynVZY8gsVXY",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [candidates, setcandidates] = useState([]);

  const getData = async () => {
    try {
      const resp = await client.getEntries({ content_type: "candidate" });
      const candidates = resp?.items?.map((item) => {
        const { category, name, sex, voteCount, img } = item?.fields;
        const id = item?.sys?.id;
        const imgurl = img?.fields?.file?.url;
        return { category, name, sex, voteCount, id, imgurl };
      });
      setcandidates(candidates);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, candidates };
};

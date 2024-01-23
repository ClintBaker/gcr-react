import axios from "axios";

const url = "http://localhost:9000";

export const getRanks = async (setRanks) => {
  const ranks = await axios.get(`${url}/rank`);

  if (ranks.status === 200) {
    setRanks(ranks.data.data);
  } else {
    alert("Unable to get ranks");
  }
};

export const getRankById = async (setRank, setFormData, id) => {
  const rank = await axios.get(`${url}/rank/${id}`);

  if (rank.status === 200) {
    setRank(rank.data.data);
    setFormData(rank.data.data);
  } else {
    alert("Unable to get rank");
    setRank(undefined);
  }
};

export const deleteRank = async (navigate, id) => {
  const rank = await axios.delete(`${url}/rank/${id}`);

  if (rank.status === 200) {
    navigate("/");
  } else {
    alert("Unable to delete rank");
  }
};

export const editRank = async (setRank, id, formData, setFormData) => {
  const updatedRank = await axios.put(`${url}/rank/${id}`, formData);

  if (updatedRank.status === 200) {
    setRank(updatedRank.data.data);
  } else {
    alert("Unable to update rank");
  }
};

// @ts-nocheck
import React, { useEffect, useState } from "react";
import { fetchTags } from "../utils/api";
import Select from "react-select";

const TagSelect = ({ handleSelect }) => {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);

  const fetch = async () => {
    const data = await fetchTags();
    const mapOp = data?.map((tag) => ({ value: tag.name, label: tag.name }));
    setOptions(mapOp);
  };

  const handleTagChange = (selectedOptions) => {
    const tags = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setSelected(tags);
    handleSelect(tags);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Select
      placeholder="Select Tags..."
      options={options}
      isMulti
      value={options.filter((stag) => selected.includes(stag.value))}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? "#1447e6" : "transparent",
          borderRadius: "8px",
        }),
      }}
      onChange={handleTagChange}
    />
  );
};

export default TagSelect;

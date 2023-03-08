function NewListing() {
  const [newListingName, setNewListingName] = useState(null);
  const [newListingDescription, setNewListingDescription] = useState(null);
  const [newListingPrice, setNewListingPrice] = useState(null);
  const [newListingImgURL, setNewListingImgURL] = useState(null);
  const [newListingCategory, setNewListingCategory] = useState(null);

  return <p>New Listing</p>;
}

export default NewListing;

import EveningLatestDescriptionList from "../components/EveningLatestDescriptionList";
import EveningLatestImageList from "../components/EveningLatestImageList";

// Define section identifiers to display only images in that section
const SECTIONS = {
    LATEST_COLLECTION: 5, // Section identifier for latest collection 
};

// This component displays the latest collection
const LatestCollection = () => {
  return (
    <div className="evening-latest">
      {/* Component to display the description of the latest collection */}
      <EveningLatestDescriptionList categorySlug="latest-collection" />
      {/* Component to display images of the latest collection */}
      <EveningLatestImageList start={0} end={4} additionalClass="evening-latest__image" section={SECTIONS.LATEST_COLLECTION} />
    </div>
  );
};

export default LatestCollection;

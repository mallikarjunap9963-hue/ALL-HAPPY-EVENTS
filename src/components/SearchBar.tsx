import CategorySelect from "./CategorySelect";
import LocationSelect from "./LocationSelect";
import SearchButton from "./SearchButton";

export default function SearchBar() {
  return (
    <div className="form-bg row align-items-center">
      <div className="col-12 col-md-5">
        <CategorySelect />
      </div>

      <div className="col-12 col-md-5">
        <LocationSelect />
      </div>

      <div className="col-12 col-md-2">
        <SearchButton />
      </div>
    </div>
  );
}
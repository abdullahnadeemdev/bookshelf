import { DropArrowIcon } from "../../../assets/icons";

const SideBar = ({ setFilter, filter }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);

    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-whiteBg w-[20vw] text-black p-4 rounded-xl mt-4">
      <div>
        <h3 className="text-lg  sm:text-xl md:text-2xl font-semibold">
          Categories
        </h3>
        <input
          type="text"
          name="categoryInput"
          id="categoryInput"
          className="p-2 bg-lGrayBg rounded-xl my-3 w-[14vw] text-xs sm:text-sm md:text-base"
          placeholder="FIND CATEGORY"
        />
        <span className="flex lg:gap-2 items-center">
          <p className="text-xs sm:text-sm md:text-base">
            Imaginative Literature
          </p>
          <DropArrowIcon classname=" mt-1 " />
        </span>

        <span className="flex lg:gap-2 items-center">
          <p className="text-xs sm:text-sm md:text-base">
            Scientific Literature
          </p>
          <DropArrowIcon classname=" mt-1 " />
        </span>

        <span className="flex lg:gap-2 items-center">
          <p className="text-xs sm:text-sm md:text-base">Business</p>
          <DropArrowIcon classname=" mt-1 " />
        </span>

        <span className="flex lg:gap-2 items-center">
          <p className="text-xs sm:text-sm md:text-base">Educational</p>
          <DropArrowIcon classname=" mt-1 " />
        </span>

        <span className="flex lg:gap-2 items-center">
          <p className="text-xs sm:text-sm md:text-base">Other</p>
          <DropArrowIcon classname=" mt-1 " />
        </span>
      </div>

      <div>
        <h3 className="mt-10 text-lg  sm:text-xl md:text-2xl font-semibold">
          PUBLISH DATE
        </h3>
        <span className="relative">
          <select
            type="input"
            name="yearsInput"
            onChange={handleChange}
            id="yearsInput"
            className="py-2 px-3  border text-black border-black rounded-xl my-3 w-[12vw]"
            placeholder="All Years"
          >
            <option className="max-w-3" value="none">
              none
            </option>
            <option className="max-w-3" value="2007">
              2007
            </option>
            <option className="max-w-3" value="2005">
              2005
            </option>
            <option className="max-w-3" value="2006">
              2006
            </option>
            <option className="max-w-3" value="2008">
              2008
            </option>
          </select>
          {/* <DropArrowIcon classname="absolute top-2 right-4 " /> */}
        </span>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10">
          Language
        </h3>
        <div className="flex flex-col gap-2">
          <span className="flex gap-1 mt-2">
            <label className="">
              <input
                className="mr-1"
                value="English"
                checked={filter.language === "English"}
                onChange={handleChange}
                type="checkbox"
                name="language"
              />
              English
            </label>
          </span>

          <span className="flex gap-1">
            <label>
              <input
                className="mr-1"
                onChange={handleChange}
                value="Russian"
                checked={filter.language === "Russian"}
                type="checkbox"
                name="language"
              />
              Russian
            </label>
          </span>

          <span className="flex gap-1 mb-2">
            <label>
              <input
                className="mr-1"
                value="Urdu"
                checked={filter.language === "Urdu"}
                onChange={handleChange}
                type="checkbox"
                name="language"
              />
              Urdu
            </label>
          </span>
        </div>

        <p className="underline text-sm">VIEW ALL</p>
      </div>
      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10">
          Price
        </h3>

        <div className="flex gap-2 lg:gap-4 items-center">
          <p className="bg-g rounded-lg bg-lGrayBg py-2 px-3">$5</p>
          <p>to</p>
          <p className="bg-g rounded-lg bg-lGrayBg py-2 px-3">$60</p>
        </div>
        <span className="border ">slider</span>
        <p className="text-sm underline mt-2">Reset</p>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10">
          PUBLISHING HOUSE
        </h3>

        <div className="flex flex-col lg:gap-2">
          <span className="flex gap-1 mt-2">
            <label className="">
              <input
                className="mr-1"
                onChange={handleChange}
                value="Rib Knits"
                type="checkbox"
                name="publishH"
              />
              Rib Knits
            </label>
          </span>

          <span className="flex gap-1">
            <label>
              <input
                className="mr-1"
                value="Panne Velvet"
                onChange={handleChange}
                type="checkbox"
                name="publishH"
              />
              Panne Velvet
            </label>
          </span>

          <span className="flex gap-1 mb-2">
            <label>
              <input
                className="mr-1"
                value="Elasticized Fabrics"
                type="checkbox"
                onChange={handleChange}
                name="publishH"
              />
              Elasticized Fabrics
            </label>
          </span>

          <span className="flex gap-1 mb-2">
            <label>
              <input
                className="mr-1"
                value="Dotted Swiss"
                onChange={handleChange}
                type="checkbox"
                name="publishH"
              />
              Dotted Swiss
            </label>
          </span>
          <span className="flex gap-1 mb-2">
            <label>
              <input
                className="mr-1"
                value="Double Knit"
                type="checkbox"
                onChange={handleChange}
                name="publishH"
              />
              Double Knit
            </label>
          </span>
        </div>

        <p className="underline text-sm">VIEW ALL</p>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10">
          COVER STYLE
        </h3>

        <div className="flex flex-col gap-2">
          <span className="flex gap-1 mt-2">
            <label className="">
              <input
                className="mr-1"
                onChange={handleChange}
                value="Hardcover"
                type="radio"
                name="coverType"
              />
              Hardcover
            </label>
          </span>

          <span className="flex gap-1">
            <label>
              <input
                className="mr-1"
                onChange={handleChange}
                value="Softcover"
                type="radio"
                name="coverType"
              />
              Softcover
            </label>
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10">
          OTHER
        </h3>
        <span className="flex gap-2 mt-2">
          <label className="">
            <input
              className="mr-1"
              value="4"
              type="checkbox"
              onChange={handleChange}
              name="ratingCheck"
            />
            4+ stars
          </label>
        </span>
      </div>
    </div>
  );
};

export default SideBar;

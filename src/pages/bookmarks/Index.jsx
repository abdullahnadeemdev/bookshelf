import CardBookmark from "./CardBookmark";

const Index = () => {
  let booksArray = JSON.parse(localStorage.getItem("bookmarks")) || [];

  return (
    <div className="h-fit pb-10 mb-10 2xl:h-screen max-w-[1440px] px-4 bg-blackC">
      <h1 className="font-semibold text-4xl py-10">Favourite Books</h1>
      <div className="flex justify-evenly gap-3 flex-wrap">
        {booksArray.length > 0 ? (
          booksArray?.map((item, index) => (
            <CardBookmark
              key={index}
              image={item.image}
              author={item.author}
              title={item.title}
              comts={item.comts}
              star={item.star}
              people={item.people}
              price={item.price}
              saleP={item.saleP}
            />
          ))
        ) : (
          <p className="text-red text-4xl font-semibold">
            There are no books added
          </p>
        )}
      </div>
    </div>
  );
};

export default Index;

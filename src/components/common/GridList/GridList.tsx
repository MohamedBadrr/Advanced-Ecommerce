
type GridListProps<T> = {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  noItems : string ;
};

//  type hasId = {id : number}
// const GridList = <T extends hasId>({ data, renderItem , noItems }: GridListProps<T>) => {
  const GridList = <T, >({ data, renderItem , noItems }: GridListProps<T>) => {
  const itemsList =
    data.length > 0 ? (
      data.map((item) => {
        // return <div key={item.id}>{renderItem(item)}</div>;
        return <div>{renderItem(item)}</div>;
      })
    ) : (
      <p className="font-bold text-[25p]">{noItems}</p>
    );
  return (
    <div className={`grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 place-items-center mt-[25px] w-full mx-auto`}>
      {itemsList}
    </div>
  );
};

export default GridList;

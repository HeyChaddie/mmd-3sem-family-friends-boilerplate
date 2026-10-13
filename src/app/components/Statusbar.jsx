const Statusbar = () => {
  return (
    <div className="bg-amber-500 max-w-full flex flex-row justify-between">
      <p>status</p>
      <div className="flex flex-row justify-between">
        <p>conn</p>
        <p>wifi</p>
        <p>batt</p>
      </div>
    </div>
  );
};

export default Statusbar;

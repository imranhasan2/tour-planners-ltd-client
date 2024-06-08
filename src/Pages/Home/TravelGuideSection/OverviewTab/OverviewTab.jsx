

const OverviewTab = () => {
    return (
        <div className="overview-tab flex justify-center flex-col items-center">
            <h2 className="mb-2 text-3xl text-[#2a4365]">Overview</h2>
            
            <iframe
          width="400"
          height="315"
          src="https://www.youtube.com/embed/4-I2f2h-fDk"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Overview Video"
        ></iframe>
        </div>
    );
};

export default OverviewTab;
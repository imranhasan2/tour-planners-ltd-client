import { useParams } from "react-router-dom";
import useGuideDetails from "../../Hooks/useGuideDetails/useGuideDetails";

const TourGuideProfilePage = () => {
  const { id } = useParams();

  const { guideProfile } = useGuideDetails(id);

  return (
    <div className="tour-guide-profile-container">
      <div className="tour-guide-profile">
        <img
          src={guideProfile?.profilePhoto}
          alt="Tour Guide Profile Photo"
          className="profile-image object-cover object-center rounded-full"
        />
        <div className="profile-info">
          <h1 className="profile-name text-2xl font-display tracking-widest uppercase text-teal-600">
            {guideProfile?.name}
          </h1>
          <div className="contact-details flex items-center justify-between">
            <p className="text-lg font-semibold text-gray-700">Email:</p>
            <a
              href={`mailto:${guideProfile?.contactDetails?.email}`}
              className="text-lg text-teal-600"
            >
              {guideProfile?.contactDetails?.email}
            </a>
          </div>
          <p className="education text-lg mt-3 font-medium text-gray-700">
            Education: {guideProfile?.education}
          </p>
          <div className="skills-section flex items-center mt-4">
            <p className="text-lg font-semibold mr-2 text-gray-700">Skills:</p>
            {guideProfile?.skills?.map((skill, idx) => (
              <span
                className="skill-badge px-2 py-1 rounded-full bg-teal-100 text-teal-600 font-medium text-sm mr-2"
                key={idx}
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="experience-section mt-4">
            <h2 className="text-lg font-semibold text-gray-700">Experience:</h2>
            <ul className="experience-list">
              {guideProfile?.workExperience?.map((exp, idx) => (
                <li className="experience-item border-b border-dashed border-gray-300 py-2" key={idx}>
                  <p className="text-base font-medium text-gray-700">Position: {exp.position}</p>
                  <p className="text-base text-gray-700">Company: {exp.company}</p>
                  <p className="text-base text-gray-700">Years: {exp.years}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourGuideProfilePage;
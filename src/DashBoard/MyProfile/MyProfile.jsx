import useAuth from "../../Hooks/useAuth";
import usePublicAxios from "../../Hooks/usePublic/usePublicAxios";


const MyProfile = () => {
    const { user } = useAuth()
    console.log(user)
    const axiosPublic = usePublicAxios()

    const handleStorySubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosPublic.post('/story');
            console.log("Story added:", res.data);

        } catch (error) {
            console.error("Error submitting story:", error);
        }
    };



    return (
        <div className="profile">
            {user ? (
                <>
                    <h1>{user?.displayName}</h1>
                    <img src={user?.photoURL} />
                    <p>{user?.email}</p>
                    {/* Add more profile details here */}
                    <form onSubmit={handleStorySubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Post Your Story</span>
                            </label>
                            <input type="text" placeholder="Post Here" className="input input-bordered h-48" required />
                           
                        </div>
                        <button type="submit">Submit Story</button>
                    </form>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MyProfile;
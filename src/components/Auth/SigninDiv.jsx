// ////???????????????????????????????
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const LoginDiv = ({ setReg, setpopup }) => {
  const authCtx = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await authCtx.login(email, password);
      setLoading(false);
      alert("Login successful!");
      setpopup((prev) => !prev);
      // Handle redirection or state update after successful login
    } catch (error) {
      setLoading(false);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  const handleSignUp = () => {
    setReg(true);
  };

  return (
    <form className="space-y-6 px-6 pb-4 " onSubmit={handleSubmit}>
      <h3 className="text-xl font-medium text-white">Log in to LeetClone</h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="*******"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full text-xl text-white border-white focus:ring-blue-300 hover:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-accent-orange-s"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Log in"}
      </button>

      <div className="text-sm font-medium text-gray-300">
        Don't have an account?{" "}
        <span
          className="text-blue-700 hover:underline"
          onClick={handleSignUp}
          role="button"
          tabIndex={0}
        >
          Sign up
        </span>
      </div>
    </form>
  );
};

export default LoginDiv;

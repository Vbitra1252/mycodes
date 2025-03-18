import { useFormik } from "formik";
import * as Yup from "yup";
import "./RegisterForm.css";

const RegisterForm = () => {
    const formik = useFormik({
        initialValues: {
            fullName: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            terms: false,
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Full Name is required"),
            username: Yup.string()
                .min(6, "Username must be at least 6 characters")
                .required("Username is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required"),
            terms: Yup.boolean().oneOf([true], "You must accept the terms"),
        }),
        onSubmit: (values) => {
            alert("Registration Successful!");
            console.log(values);
        },
    });

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={formik.handleSubmit}>
                {/* Full Name */}
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullName}
                        className={formik.touched.fullName && formik.errors.fullName ? "error" : ""}
                    />
                    {formik.touched.fullName && formik.errors.fullName && (
                        <p className="error-text">{formik.errors.fullName}</p>
                    )}
                </div>

                {/* Username */}
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                        className={formik.touched.username && formik.errors.username ? "error" : ""}
                    />
                    {formik.touched.username && formik.errors.username && (
                        <p className="error-text">{formik.errors.username}</p>
                    )}
                </div>

                {/* Email */}
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={formik.touched.email && formik.errors.email ? "error" : ""}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="error-text">{formik.errors.email}</p>
                    )}
                </div>

                {/* Password */}
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className={formik.touched.password && formik.errors.password ? "error" : ""}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <p className="error-text">{formik.errors.password}</p>
                    )}
                </div>

                {/* Confirm Password */}
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                        className={
                            formik.touched.confirmPassword && formik.errors.confirmPassword ? "error" : ""
                        }
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <p className="error-text">{formik.errors.confirmPassword}</p>
                    )}
                </div>

                {/* Terms & Conditions */}
                <div className="form-group checkbox">
                    <input
                        type="checkbox"
                        name="terms"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.terms}
                    />
                    <label>I have read and agree to the Terms</label>
                    {formik.touched.terms && formik.errors.terms && (
                        <p className="error-text">{formik.errors.terms}</p>
                    )}
                </div>

                {/* Buttons */}
                <div className="form-actions">
                    <button type="submit" className="register-btn">Register</button>
                    <button type="reset" className="reset-btn" onClick={formik.handleReset}>
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;

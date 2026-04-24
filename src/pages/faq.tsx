import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getFaqs } from "../services/faq.service";
import Footer from "../components/footer";
import { IconHome } from "@tabler/icons-react";

const FaqPage = () => {
    const { data: faqs, isLoading } = useQuery({
        queryKey: ["faqs"],
        queryFn: getFaqs,
    });

    return (
        <>
            <div className="container-fluid pt-5" style={{ marginTop: "90px" }}>

                {/* Breadcrumb */}
                <div className="container py-3">
                    <nav className="breadcrumb">
                        <Link to="/"><IconHome /></Link>
                        <span className="mx-2">›</span>
                        <span className="text-danger">FAQs</span>
                    </nav>
                </div>

                {/* Heading */}
                <div className="text-center my-5">
                    <div
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                        style={{ width: 60, height: 60, background: "#ffe6f0", color: "#ff2e86", fontSize: 28 }}
                    >
                        ?
                    </div>

                    <h1 className="fw-bold">COMMON QUESTIONS</h1>
                    <p className="text-muted mx-auto" style={{ maxWidth: 720 }}>
                        Everything you need to know about our event planning services, policies,
                        and how we help you create unforgettable memories.
                    </p>
                </div>

                {/* FAQ Box */}
                <div className="container">
                    <div className="bg-light rounded-4 p-4">

                        {isLoading && <p>Loading FAQs...</p>}

                        {!isLoading && faqs?.length === 0 && (
                            <p className="text-center text-muted">
                                No FAQs found at the moment. Please check back later.
                            </p>
                        )}

                        <div className="accordion" id="faqAccordion">
                            {faqs?.map((faq: any, index: number) => (
                                <div className="accordion-item mb-2" key={faq.id}>
                                    <h2 className="accordion-header">
                                        <button
                                            className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#faq-${faq.id}`}
                                        >
                                            {faq.question}
                                        </button>
                                    </h2>
                                    <div
                                        id={`faq-${faq.id}`}
                                        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default FaqPage;
import { useMemo, useRef, useState } from "react";
import achievements from "../data/achievements.js";
import certifications from "../data/certifications.js";
import { sectionAnchors } from "../data/content.js";
import useScrollReveal from "../hooks/useScrollReveal.js";
import Modal from "../ui/Modal.jsx";
import "./Certifications.css";

const PAGE_BATCH = 12;

function cleanText(text) {
  if (!text) return "";
  return text
    .replace(/\[cite:[^\]]*\]/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function getIssuer(name, defaultIssuer) {
  if (defaultIssuer) return defaultIssuer;
  if (!name) return "Verified Provider";
  if (name.includes(" - ")) {
    const parts = name.split(" - ");
    return parts[parts.length - 1].trim();
  }
  if (name.includes("Google Solution Challenge")) return "Google";
  if (name.includes("Pega National Internship"))
    return "Pegasystems × SmartBridge (AICTE NEAT)";
  if (name.includes("ServiceNow")) return "ServiceNow University";
  if (name.includes("Infosys Springboard")) return "Infosys Springboard";
  return "Verified Issuer";
}

function getCategory(item) {
  if (item.platform) return "Coding Badges";

  const id = item.id || "";
  const name = (item.name || "").toLowerCase();

  if (
    id === "pega-national-internship" ||
    id === "servicenow-micro-certification" ||
    name.includes("internship")
  ) {
    return "Internships";
  }

  if (
    name.includes("ai") ||
    name.includes("cloud") ||
    name.includes("devops") ||
    name.includes("emerging tech") ||
    id.includes("oracle-ai") ||
    id.includes("nptel-genai") ||
    id.includes("google-solution")
  ) {
    return "Cloud / AI";
  }

  if (
    name.includes("data science") ||
    name.includes("database") ||
    name.includes("mongodb") ||
    name.includes("power bi") ||
    name.includes("tableau") ||
    name.includes("analytics") ||
    name.includes("dashboards")
  ) {
    return "Databases";
  }

  if (
    name.includes("java") ||
    name.includes("python") ||
    name.includes("c++") ||
    name.includes("web developer") ||
    name.includes("full stack") ||
    name.includes("payment system")
  ) {
    return "Programming";
  }

  return "Other";
}

function hasValidImage(imagePath) {
  if (!imagePath || typeof imagePath !== "string") return false;
  const trimmed = imagePath.trim();
  if (trimmed === "" || trimmed.startsWith("TODO:")) return false;
  return true;
}

export function Certifications() {
  const { ref: sectionRef, isRevealed } = useScrollReveal();
  const [activeItem, setActiveItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAllExpanded, setIsAllExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_BATCH);
  const [failedImageIds, setFailedImageIds] = useState(() => new Set());
  const activeTriggerRef = useRef(null);

  const handleImageError = (id) => {
    setFailedImageIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  // Combine and normalize all 33 certifications + 8 achievements
  const allItems = useMemo(() => {
    const certItems = certifications.map((c) => ({
      id: c.id,
      name: c.name,
      issuer: getIssuer(c.name),
      credentialId: c.credentialId || "",
      verifyUrl: c.verifyUrl || "",
      description: cleanText(c.description),
      image: c.image || "",
      hasImage: hasValidImage(c.image),
      featured: !!c.featured,
      category: getCategory(c),
      isBadge: false,
    }));

    const badgeItems = achievements.map((a) => ({
      id: a.id,
      name: a.name,
      issuer: a.platform || "Competitive Platform",
      credentialId: "",
      verifyUrl: a.profileUrl || "",
      description: cleanText(a.description),
      image: a.image || "",
      hasImage: hasValidImage(a.image),
      featured: false,
      category: "Coding Badges",
      isBadge: true,
    }));

    return [...certItems, ...badgeItems];
  }, []);

  const featuredItems = useMemo(
    () => allItems.filter((item) => item.featured),
    [allItems],
  );

  const categories = useMemo(() => {
    const cats = [
      "All",
      "Cloud / AI",
      "Databases",
      "Programming",
      "Internships",
      "Coding Badges",
      "Other",
    ];
    return cats.map((cat) => {
      const count =
        cat === "All"
          ? allItems.length
          : allItems.filter((i) => i.category === cat).length;
      return { name: cat, count };
    });
  }, [allItems]);

  const filteredDirectoryItems = useMemo(() => {
    if (selectedCategory === "All") return allItems;
    return allItems.filter((item) => item.category === selectedCategory);
  }, [allItems, selectedCategory]);

  const displayedDirectoryItems = useMemo(() => {
    return filteredDirectoryItems.slice(0, visibleCount);
  }, [filteredDirectoryItems, visibleCount]);

  const openModal = (item, event) => {
    activeTriggerRef.current = event?.currentTarget || null;
    setActiveItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id={sectionAnchors.certifications}
      ref={sectionRef}
      className={`certifications-section ${isRevealed ? "is-revealed" : "is-hidden"}`}
      aria-labelledby="certifications-heading"
    >
      {/* Window Header */}
      <div className="certifications__window-header" aria-hidden="true">
        <div className="certifications__window-dots">
          <span className="certifications__dot certifications__dot--red" />
          <span className="certifications__dot certifications__dot--yellow" />
          <span className="certifications__dot certifications__dot--green" />
        </div>
        <span className="certifications__window-title">
          vikranth/certifications/
        </span>
        <span className="certifications__window-badge">33 certs · 8 badges</span>
      </div>

      <div className="certifications__window-body">
        {/* Section Header */}
        <header className="certifications__header">
          <div className="certifications__prompt-line" aria-hidden="true">
            <span className="certifications__prompt">vikranth@portfolio:~$</span>
            <span className="certifications__prompt-cmd">
              ls -la certifications/
            </span>
          </div>
          <h2 id="certifications-heading" className="certifications__heading">
            <span
              className="certifications__heading-prefix"
              aria-hidden="true"
            >
              ##{" "}
            </span>
            Certifications &amp; Credentials
          </h2>
          <p className="certifications__subhead">
            Verified industry credentials, cloud certifications, and technical
            problem-solving badges.
          </p>
        </header>

        {/* Featured Certifications Subsection */}
        <div className="certifications__featured-block">
          <h3 className="certifications__subtitle">
            <span className="certifications__sub-icon" aria-hidden="true">
              ★
            </span>{" "}
            Featured Credentials ({featuredItems.length})
          </h3>

          <div
            className="certifications__grid certifications__grid--featured"
            aria-label="Featured certifications"
          >
            {featuredItems.map((cert) => {
              const hasImg = cert.hasImage && !failedImageIds.has(cert.id);
              return (
                <article key={cert.id} className="cert-card cert-card--featured">
                  <div className="cert-card__preview">
                    {hasImg ? (
                      <img
                        src={cert.image}
                        alt={`Certificate preview for ${cert.name}`}
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="250"
                        className="cert-card__thumbnail"
                        onError={() => handleImageError(cert.id)}
                      />
                    ) : (
                      <div className="cert-card__placeholder">
                        <span
                          className="cert-card__placeholder-icon"
                          aria-hidden="true"
                        >
                          📜
                        </span>
                        <span className="cert-card__placeholder-text">
                          Certificate image coming soon
                        </span>
                      </div>
                    )}
                    <span className="cert-card__issuer-chip">{cert.issuer}</span>
                  </div>

                  <div className="cert-card__content">
                    <h4 className="cert-card__title">{cert.name}</h4>
                    {cert.credentialId && (
                      <p className="cert-card__id">
                        <span className="cert-card__id-label">ID:</span>{" "}
                        <code>{cert.credentialId}</code>
                      </p>
                    )}
                    {cert.description && (
                      <p className="cert-card__desc">{cert.description}</p>
                    )}

                    <div className="cert-card__actions">
                      <button
                        type="button"
                        className="cert-card__action-btn"
                        onClick={(e) => openModal(cert, e)}
                        aria-label={`View certificate for ${cert.name}`}
                      >
                        <span>View certificate</span>
                        <span className="cert-card__arrow" aria-hidden="true">
                          ↗
                        </span>
                      </button>
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-card__verify-link"
                          aria-label={`Verify ${cert.name} online (opens in a new tab)`}
                        >
                          Verify ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Directory Toggle Control */}
        <div className="certifications__toggle-wrapper">
          <button
            type="button"
            className="certifications__toggle-btn"
            aria-expanded={isAllExpanded}
            aria-controls="certifications-directory"
            onClick={() => {
              setIsAllExpanded(!isAllExpanded);
              setVisibleCount(PAGE_BATCH);
            }}
          >
            <span className="certifications__toggle-icon" aria-hidden="true">
              {isAllExpanded ? "▾" : "▸"}
            </span>
            <span>
              {isAllExpanded
                ? "Collapse directory"
                : `View all (${allItems.length})`}
            </span>
          </button>
        </div>

        {/* Full Filterable Directory */}
        {isAllExpanded && (
          <div
            id="certifications-directory"
            className="certifications__directory"
          >
            {/* Category Filter Tabs */}
            <div
              className="certifications__filter-bar"
              role="tablist"
              aria-label="Filter credentials by category"
            >
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat.name}
                  className={`certifications__filter-chip ${
                    selectedCategory === cat.name ? "is-active" : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    setVisibleCount(PAGE_BATCH);
                  }}
                >
                  <span>{cat.name}</span>
                  <span className="certifications__filter-count">
                    ({cat.count})
                  </span>
                </button>
              ))}
            </div>

            {/* Filtered Grid */}
            <div
              className="certifications__grid"
              aria-label={`Credentials directory for ${selectedCategory}`}
            >
              {displayedDirectoryItems.map((item) => {
                const hasImg = item.hasImage && !failedImageIds.has(item.id);
                return (
                  <article key={item.id} className="cert-card">
                    <div className="cert-card__preview cert-card__preview--compact">
                      {hasImg ? (
                        <img
                          src={item.image}
                          alt={`${item.isBadge ? "Badge" : "Certificate"} for ${item.name}`}
                          loading="lazy"
                          decoding="async"
                          width="300"
                          height="190"
                          className="cert-card__thumbnail"
                          onError={() => handleImageError(item.id)}
                        />
                      ) : (
                        <div className="cert-card__placeholder">
                          <span
                            className="cert-card__placeholder-icon"
                            aria-hidden="true"
                          >
                            {item.isBadge ? "★" : "📜"}
                          </span>
                          <span className="cert-card__placeholder-text">
                            {item.isBadge
                              ? "Badge verification active"
                              : "Certificate image coming soon"}
                          </span>
                        </div>
                      )}
                      <span className="cert-card__issuer-chip">
                        {item.issuer}
                      </span>
                    </div>

                    <div className="cert-card__content">
                      <h4 className="cert-card__title">{item.name}</h4>
                      {item.credentialId && (
                        <p className="cert-card__id">
                          <span className="cert-card__id-label">ID:</span>{" "}
                          <code>{item.credentialId}</code>
                        </p>
                      )}
                      {item.description && (
                        <p className="cert-card__desc">{item.description}</p>
                      )}

                      <div className="cert-card__actions">
                        <button
                          type="button"
                          className="cert-card__action-btn"
                          onClick={(e) => openModal(item, e)}
                          aria-label={`View ${item.isBadge ? "badge" : "certificate"} for ${item.name}`}
                        >
                          <span>
                            {item.isBadge ? "View badge" : "View certificate"}
                          </span>
                          <span className="cert-card__arrow" aria-hidden="true">
                            ↗
                          </span>
                        </button>
                        {item.verifyUrl && (
                          <a
                            href={item.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-card__verify-link"
                            aria-label={`Verify ${item.name} online (opens in a new tab)`}
                          >
                            Verify ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* "Show more" button (no pagination widgets) */}
            {visibleCount < filteredDirectoryItems.length && (
              <div className="certifications__load-more">
                <button
                  type="button"
                  className="certifications__load-more-btn"
                  onClick={() =>
                    setVisibleCount((prev) => prev + PAGE_BATCH)
                  }
                >
                  Show more (
                  {filteredDirectoryItems.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Shared Accessible Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={activeItem?.name || "Credential Details"}
        triggerRef={activeTriggerRef}
      >
        {activeItem && (() => {
          const hasImg = activeItem.hasImage && !failedImageIds.has(activeItem.id);
          return (
            <div className="cert-modal-content">
              {hasImg ? (
                <div className="cert-modal-media">
                  <img
                    src={activeItem.image}
                    alt={`Full size credential verification for ${activeItem.name}`}
                    loading="eager"
                    className="cert-modal-img"
                    onError={() => handleImageError(activeItem.id)}
                  />
                </div>
              ) : (
                <div className="cert-modal-no-img">
                  <span
                    className="cert-modal-no-img-icon"
                    aria-hidden="true"
                  >
                    📜
                  </span>
                  <p className="cert-modal-no-img-text">
                    Certificate image coming soon
                  </p>
                  <p className="cert-modal-no-img-sub">
                    Official verification document file is pending upload.
                  </p>
                </div>
              )}

              <div className="cert-modal-meta">
                <div className="cert-modal-meta-row">
                  <span className="cert-modal-label">Issuer:</span>
                  <span className="cert-modal-value">{activeItem.issuer}</span>
                </div>

                {activeItem.credentialId && (
                  <div className="cert-modal-meta-row">
                    <span className="cert-modal-label">Credential ID:</span>
                    <code className="cert-modal-code">
                      {activeItem.credentialId}
                    </code>
                  </div>
                )}

                {activeItem.description && (
                  <div className="cert-modal-desc-box">
                    <p className="cert-modal-desc">{activeItem.description}</p>
                  </div>
                )}

                {activeItem.verifyUrl && (
                  <div className="cert-modal-verify-box">
                    <a
                      href={activeItem.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-modal-verify-btn"
                      aria-label={`Open external verification link for ${activeItem.name} in a new tab`}
                    >
                      <span>Verify Credential Provider</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })()}
      </Modal>
    </section>
  );
}

export default Certifications;

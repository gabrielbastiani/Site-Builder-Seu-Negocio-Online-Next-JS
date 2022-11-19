import React from "react";
import styles from './CallToAction.module.css'


export default function CallToAction() {
    return (
        <>
            <section className={styles.proposta}>

                <div className={styles.fundoDivisor}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                        <path className={styles.elementorShapeFill} d="M0 0L2600 0 2600 69.1 0 0z"></path>
                        <path className={styles.elementorShapeFill} opacity="0.5" d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
                        <path className={styles.elementorShapeFill} opacity="0.25" d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
                    </svg>

                    <svg className={styles.svgBaixo} xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                        <path className={styles.elementorShapeFill} d="M0 0L2600 0 2600 69.1 0 0z"></path>
                        <path className={styles.elementorShapeFill} opacity="0.5" d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
                        <path className={styles.elementorShapeFill} opacity="0.25" d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
                    </svg>
                </div>

                <div className={styles.tituloEtiqueta}>
                    <h2>A Grande<br /> Proposta</h2>
                </div>

                <div className={styles.videoProposta}>
                    <iframe width="709" height="399" src="https://www.youtube.com/embed/pJoOxC6HL4Q"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>

            </section>

            <section className={styles.vejaReportagem}>

                <div className={styles.fundoDivisor1}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                        <path className={styles.elementorShapeFill} d="M0 0L2600 0 2600 69.1 0 0z"></path>
                        <path className={styles.elementorShapeFill} opacity="0.5" d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
                        <path className={styles.elementorShapeFill} opacity="0.25" d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
                    </svg>

                    <svg className={styles.svgBaixo1} xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                        <path className={styles.elementorShapeFill} d="M0 0L2600 0 2600 69.1 0 0z"></path>
                        <path className={styles.elementorShapeFill} opacity="0.5" d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
                        <path className={styles.elementorShapeFill} opacity="0.25" d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
                    </svg>
                </div>

                <div className={styles.tituloEtiqueta1}>
                    <h2>Veja a Reportagem</h2>
                </div>

                <div className={styles.videoReportagem}>
                    <iframe width="709" height="399" src="https://www.youtube.com/embed/eUAWlyaqsik"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>

            </section>
        </>
    )
}
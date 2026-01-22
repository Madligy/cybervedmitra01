// ui.js - Handling UI interactions like Scroll and Menu Toggle

function toggleMenu() {
    const overlay = document.getElementById('menuOverlay');
    const body = document.getElementById('body') || document.body;
    if (overlay) {
        overlay.classList.toggle('active');
        body.classList.toggle('menu-open');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let lastScrollY = window.scrollY;
    const header = document.querySelector('header');
    const scrollThreshold = 50;

    if (!header) return;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
            header.classList.add('nav-hidden');
        } else {
            header.classList.remove('nav-hidden');
        }

        lastScrollY = currentScrollY;
    }, { passive: true });
});

// Certificate Generation Logic - Text-based Signature for A4 Landscape
async function generateCertificatePDF(userName, certId, certDate) {
    if (typeof html2pdf === 'undefined') {
        alert("PDF library not loaded. Please try again.");
        return;
    }

    // A4 Landscape template with text-based signature
    const template = `
    <div style="width: 1122px; height: 793px; background: #ffffff; padding: 50px; box-sizing: border-box; border: 20px solid #0f172a; font-family: 'Inter', 'Segoe UI', Arial, sans-serif; color: #0f172a; position: relative;">
        <div style="width: 100%; height: 100%; border: 3px solid #d4af37; padding: 40px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: space-between; position: relative; background: #ffffff;">
            
            <!-- Corner Decorations -->
            <div style="position: absolute; top: 15px; left: 15px; width: 50px; height: 50px; border-top: 4px solid #d4af37; border-left: 4px solid #d4af37;"></div>
            <div style="position: absolute; top: 15px; right: 15px; width: 50px; height: 50px; border-top: 4px solid #d4af37; border-right: 4px solid #d4af37;"></div>
            <div style="position: absolute; bottom: 15px; left: 15px; width: 50px; height: 50px; border-bottom: 4px solid #d4af37; border-left: 4px solid #d4af37;"></div>
            <div style="position: absolute; bottom: 15px; right: 15px; width: 50px; height: 50px; border-bottom: 4px solid #d4af37; border-right: 4px solid #d4af37;"></div>

            <!-- Header -->
            <div style="text-align: center; margin-top: 20px;">
                <div style="font-family: 'Cinzel', serif; font-size: 2rem; color: #0f172a; letter-spacing: 0.3em; font-weight: 700;">CYBERVEDMITRA</div>
                <div style="width: 80px; height: 3px; background: #d4af37; margin: 15px auto;"></div>
            </div>

            <!-- Title -->
            <div style="text-align: center;">
                <h1 style="font-size: 4.5rem; font-weight: 800; color: #0f172a; margin: 0; text-transform: uppercase; letter-spacing: 0.2em; line-height: 1.1;">Certificate</h1>
                <h3 style="font-size: 1.6rem; font-weight: 400; color: #64748b; margin: 12px 0 0 0; letter-spacing: 0.25em; text-transform: uppercase;">of Completion</h3>
            </div>

            <!-- Recipient Section -->
            <div style="text-align: center; margin: 25px 0;">
                <p style="font-size: 1.4rem; color: #64748b; margin: 0;">This is to certify that</p>
                <h2 style="font-family: 'Dancing Script', cursive; font-size: 5rem; color: #3b82f6; margin: 20px 0; border-bottom: 2px solid #e2e8f0; padding: 0 60px; display: inline-block; min-width: 500px; text-align: center;">${userName}</h2>
            </div>

            <!-- Description -->
            <p style="font-size: 1.3rem; line-height: 1.8; color: #475569; text-align: center; max-width: 850px; margin: 0 auto;">
                has successfully mastered all <span style="color: #0f172a; font-weight: 700;">5 Learning Levels</span> in the
                <span style="color: #0f172a; font-weight: 700;">Cyber Awareness & Security Shield Program</span>.
                They have demonstrated exceptional understanding of digital safety, threat prevention, and ethical online conduct.
            </p>

            <!-- Footer with Signature, Seal, and Date -->
            <div style="display: flex; justify-content: space-between; width: 92%; margin-top: 40px; margin-bottom: 30px; align-items: flex-end;">
                
                <!-- CEO Signature (Text-based) -->
                <div style="text-align: center; width: 280px;">
                    <div style="font-family: 'Dancing Script', cursive; font-size: 2.5rem; color: #0f172a; margin-bottom: 8px;">Suhas J</div>
                    <div style="width: 240px; border-top: 2px solid #94a3b8; margin: 0 auto 8px auto;"></div>
                    <div style="font-size: 1rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.15em;">CEO, CyberVedMitra</div>
                    <div style="font-size: 0.85rem; color: #94a3b8; margin-top: 4px;">Signature</div>
                </div>

                <!-- Seal -->
                <div style="width: 130px; height: 130px; background: #d4af37; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #ffffff; font-weight: 800; transform: rotate(-15deg); box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4); border: 7px double #ffffff; font-size: 1.1rem; text-align: center; padding: 15px; box-sizing: border-box; line-height: 1.3;">
                    OFFICIAL<br>VERIFIED<br>2026
                </div>

                <!-- Date -->
                <div style="text-align: center; width: 280px;">
                    <div style="font-weight: 700; color: #0f172a; font-size: 1.5rem; margin-bottom: 8px;">${certDate}</div>
                    <div style="width: 240px; border-top: 2px solid #94a3b8; margin: 0 auto 8px auto;"></div>
                    <div style="font-size: 1rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.15em;">Date of Achievement</div>
                </div>
            </div>

            <!-- Certificate ID -->
            <div style="position: absolute; bottom: 25px; right: 30px; font-family: monospace; font-size: 0.9rem; color: #94a3b8; background: #f1f5f9; padding: 6px 15px; border-radius: 6px; letter-spacing: 0.1em;">ID: ${certId}</div>
        </div>
    </div>`;

    // Load fonts
    if (!document.querySelector('link[href*="Cinzel"]')) {
        const link = document.createElement('link');
        link.href = "https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Dancing+Script:wght@700&family=Inter:wght@400;700;800&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }

    // Create container
    const container = document.createElement('div');
    container.id = 'cert-export-container';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '1122px';
    container.style.height = '793px';
    container.style.zIndex = '999999';
    container.style.backgroundColor = '#ffffff';
    container.innerHTML = template;
    document.body.appendChild(container);

    const opt = {
        margin: 0,
        filename: `CyberVedMitra_Certificate_${userName.replace(/\s+/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            logging: false,
            width: 1122,
            height: 793,
            x: 0,
            y: 0,
            scrollY: 0,
            scrollX: 0,
            windowWidth: 1122,
            windowHeight: 793
        },
        jsPDF: { unit: 'px', format: 'a4', orientation: 'landscape' }
    };

    try {
        await new Promise(resolve => setTimeout(resolve, 2500));
        await html2pdf().set(opt).from(container).save();
    } catch (err) {
        console.error("PDF Export Error:", err);
        alert("Failed to generate PDF. Please try again.");
    } finally {
        if (document.getElementById('cert-export-container')) {
            document.body.removeChild(container);
        }
    }
}

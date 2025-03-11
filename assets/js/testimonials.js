// testimonials.js - Add this as a separate file

document.addEventListener('DOMContentLoaded', function() {
    // Find the testimonial link
    var testimonialLink = document.querySelector('.about--banner a');
    
    if (!testimonialLink) {
      console.error('Testimonial link not found');
      return;
    }
    
    // Create testimonial overlay
    var overlay = document.createElement('div');
    overlay.id = 'testimonial-overlay';
    overlay.style.cssText = `
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.85);
      z-index: 1000;
      align-items: center;
      justify-content: center;
    `;
    
    // Create testimonial content
    overlay.innerHTML = `
      <div id="testimonial-content" style="
        position: relative;
        background-color: #0c0c0c;
        max-width: 800px;
        width: 90%;
        padding: 30px;
        text-align: center;
        box-shadow: 0 0 30px rgba(0,0,0,0.75);
      ">
        <h2 style="margin-top: 0; font-size: 30px; margin-bottom: 20px;">What Our Clients Say</h2>
        <img src="assets/img/testimonial.png" alt="Client Testimonials" style="max-width: 100%; margin: 0 auto 20px auto; display: block;">
        <button id="close-testimonial" style="
          background-color: #0f33ff;
          color: white;
          border: none;
          padding: 10px 25px;
          font-weight: 700;
          cursor: pointer;
          text-transform: uppercase;
        ">Close</button>
      </div>
    `;
    
    // Add overlay to the document
    document.body.appendChild(overlay);
    
    // Set up click event on testimonial link
    testimonialLink.addEventListener('click', function(e) {
      e.preventDefault();
      overlay.style.display = 'flex';
    });
    
    // Set up close button functionality
    document.getElementById('close-testimonial').addEventListener('click', function() {
      overlay.style.display = 'none';
    });
    
    // Close when clicking outside content
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        overlay.style.display = 'none';
      }
    });
  });
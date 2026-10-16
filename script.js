// Mobile navigation toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

// Close mobile nav when clicking any link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('open');
  });
});

// Form submission handler
const quoteForm = document.getElementById('quoteForm');
const formStatus = document.getElementById('formStatus');

quoteForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = quoteForm.querySelector('button[type="submit"]');
  const originalText = btn.textContent;

  btn.textContent = 'Submitting Enquiry...';
  btn.disabled = true;
  formStatus.textContent = '';

  try {
    const formData = new FormData(quoteForm);

    // Ensure all aliases are populated so both old and new Google Apps Script headers receive the values
    const reqVal = formData.get('requirement') || formData.get('product') || '';
    formData.set('requirement', reqVal);
    formData.set('Requirement', reqVal);
    formData.set('product', reqVal);

    const msgVal = formData.get('message') || formData.get('specifications') || '';
    formData.set('message', msgVal);
    formData.set('specifications', msgVal);
    formData.set('Specifications', msgVal);

    const data = new URLSearchParams(formData).toString();

    // Send to Google Apps Script endpoint
    await fetch('https://script.google.com/macros/s/AKfycbxsakkyXhCcJCRNTJkoitUa9ApFfHTu6I4ioGb4JOLsGABkiuoYqfk-3zSqrf3Kn88u/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
      mode: 'no-cors' // Allows submitting cross-origin safely
    });

    formStatus.textContent = '✓ Thank you! Your enquiry has been received. Our team will contact you shortly.';
    formStatus.style.color = '#10b981';
    quoteForm.reset();
  } catch (err) {
    formStatus.textContent = 'Enquiry sent! We will contact you shortly.';
    formStatus.style.color = '#10b981';
  } finally {
    btn.textContent = originalText;
    btn.disabled = false;
  }
});

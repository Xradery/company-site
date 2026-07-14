/**
 * 广州皓睿智能电器有限公司 - 官网脚本
 * Guangzhou Haorui Intelligent Electric Appliances Co., Ltd.
 */

(function() {
    'use strict';

    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Contact form submission
    const inquiryForm = document.getElementById('inquiry-form');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const name = inquiryForm.querySelector('input[type="text"]').value.trim();
            const email = inquiryForm.querySelector('input[type="email"]').value.trim();
            const message = inquiryForm.querySelector('textarea').value.trim();

            if (!name || !email || !message) {
                alert('请填写必填字段。 / Please fill in all required fields.');
                return;
            }

            // Email format validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('请输入有效的邮箱地址。 / Please enter a valid email address.');
                return;
            }

            // Show success message (form is static, no actual submission)
            alert('感谢您的询价！我们会尽快与您联系。\n\nThank you for your inquiry! We will contact you soon.');

            // Reset form
            inquiryForm.reset();
        });
    }

    // Add active class to current page nav link (for future enhancement)
    // Currently handled by inline classes on each page

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

})();

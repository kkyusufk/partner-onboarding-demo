/**
 * Partner Onboarding Class 
 */
 class PartnerOnboarding {
  #iFrame = null
  constructor({ partnerId }) {
    this.partnerId = partnerId;
    this.status = {};
    this.url = 'http://localhost:8000/phantom/onboarding/';
  }

  start = () => {
    document.body.append(this.#createIframe());

    window.onmessage = (e) => console.log(e);

    return new Promise((resolve, reject) => {
      resolve(this.status);
      reject({
        onboardingStatus: this.status
      })
    });
  }

  /**
   * creates an iFrame 
   * @returns HTMLIframeElement
   */
  #createIframe() {
    const iframe = document.createElement('iframe');
    iframe.src=`${this.url}?partnerId=${this.partnerId}`;
    iframe.className = "razorpay-onboarding-iframe";
    this.iframe = iframe;
    return iframe;
  }

  getiFrame() {
    return this.iFrame;
  }
}

window.partnerOnboarding = PartnerOnboarding;

export default PartnerOnboarding;
"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Camera, Scale, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="medium"
        background="noiseDiagonalGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Anasayfa",
          id: "hero",
        },
        {
          name: "Portföy",
          id: "portfolio",
        },
        {
          name: "Kazan Kazan",
          id: "referral",
        },
        {
          name: "İletişim",
          id: "contact",
        },
      ]}
      brandName="UK Realty"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      title="İstanbul’da Gayrimenkulün Yeni Nesli"
      description="Satılık, kiralık ve yatırım fırsatları için profesyonel çözüm ortağınız."
      testimonials={[
        {
          name: "Ahmet Y.",
          handle: "@ahmet_y",
          testimonial: "UK Realty ile yatırım yapmak harika bir deneyimdi. Profesyoneller.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/night-coastal-city_23-2148139074.jpg",
          imageAlt: "istanbul bosphorus sunset aerial view",
        },
        {
          name: "Ayşe K.",
          handle: "@ayse_k",
          testimonial: "Hızlı satış ve şeffaf süreç. Kesinlikle öneririm.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-wooden-house-interior-with-timber-decor-furnishings_23-2151263535.jpg",
          imageAlt: "istanbul bosphorus sunset aerial view",
        },
        {
          name: "Mehmet D.",
          handle: "@mehmet_d",
          testimonial: "Kazan Kazan sistemi ile ek gelir elde etmek çok kolay oldu.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-office-desk-with-growth-chart-laptop_23-2148780610.jpg",
          imageAlt: "istanbul bosphorus sunset aerial view",
        },
        {
          name: "Selin B.",
          handle: "@selin_b",
          testimonial: "Lüks konut arayışımda doğru adres. Çok teşekkürler.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-realtor-working-desk_23-2147764221.jpg",
          imageAlt: "istanbul bosphorus sunset aerial view",
        },
        {
          name: "Can T.",
          handle: "@can_t",
          testimonial: "Sektördeki en dinamik ve genç ekip. Vizyonları çok geniş.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-with-digital-tablet_1098-651.jpg",
          imageAlt: "istanbul bosphorus sunset aerial view",
        },
      ]}
      buttons={[
        {
          text: "Portföy İncele",
          href: "#portfolio",
        },
        {
          text: "Bize Ulaş",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/night-coastal-city_23-2148139074.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/closeup-portrait-confident-business-leader_1262-4808.jpg",
          alt: "Business leader",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-happy-mature-businessman-holding-mobile-phone_23-2147899738.jpg",
          alt: "Happy businessman",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-business-man-with-backpack_23-2149915912.jpg",
          alt: "Professional man",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-happy-businessman-with-crossed-arms_23-2147955274.jpg",
          alt: "Confident businessman",
        },
        {
          src: "http://img.b2bpic.net/free-photo/positive-shaved-head-male-dressed-grey-suit-dark-grey-background_613910-11352.jpg",
          alt: "Successful male",
        },
      ]}
      avatarText="100+ Mutlu Yatırımcı"
      marqueeItems={[
        {
          type: "text",
          text: "Lüks Konut",
        },
        {
          type: "text",
          text: "Ticari Yatırım",
        },
        {
          type: "text",
          text: "Hukuki Destek",
        },
        {
          type: "text",
          text: "Ekspertiz",
        },
        {
          type: "text",
          text: "Portföy Yönetimi",
        },
      ]}
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Boğaz Manzaralı Villa",
          price: "15.000.000$+",
          imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-wooden-house-interior-with-timber-decor-furnishings_23-2151263535.jpg",
        },
        {
          id: "p2",
          name: "Levent Lüks Rezidans",
          price: "5.500.000$+",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-office-desk-with-growth-chart-laptop_23-2148780610.jpg",
        },
        {
          id: "p3",
          name: "Nişantaşı Penthouse",
          price: "8.200.000$+",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-realtor-working-desk_23-2147764221.jpg",
        },
        {
          id: "p4",
          name: "Bebek Sahil Daire",
          price: "4.500.000$+",
          imageSrc: "http://img.b2bpic.net/free-photo/ai-generated-house-design_23-2150666333.jpg",
        },
        {
          id: "p5",
          name: "Zekeriyaköy Müstakil",
          price: "3.800.000$+",
          imageSrc: "http://img.b2bpic.net/free-photo/interior-designer-clients-discussing-drawings_74855-2943.jpg",
        },
        {
          id: "p6",
          name: "Maslak Yatırım Ofis",
          price: "2.900.000$+",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-world-intellectual-property-day_23-2151325859.jpg",
        },
      ]}
      title="Seçkin Portföyümüz"
      description="İstanbul'un en prestijli lokasyonlarında size özel fırsatlar."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Modern, Dinamik ve Şeffaf",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/spacious-room-with-big-window_1203-1490.jpg",
          alt: "UK Realty Ofis",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Yatırım Danışmanlığı",
          description: "Geleceğinizi güvence altına alan stratejiler.",
          icon: TrendingUp,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/caucasian-man-working-with-building-illustration-green-background_53876-30072.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/decorated-interior-christmas-beautiful-christmas-tree-near-modern-expensive-couch-big-clock-with-roman-numbers_132075-6150.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/night-coastal-city_23-2148139074.jpg",
          imageAlt: "financial investment growth data",
        },
        {
          title: "Hukuki Süreç Desteği",
          description: "Tüm tapu ve sözleşme süreçlerinde yanınızdayız.",
          icon: Scale,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/hand-filling-document-closeup_1150-14905.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/invest-investment-financial-income-profit-costs-concept_53876-134068.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-wooden-house-interior-with-timber-decor-furnishings_23-2151263535.jpg",
          imageAlt: "financial investment growth data",
        },
        {
          title: "Profesyonel Fotoğrafçılık",
          description: "Portföyünüzü en iyi şekilde sergiliyoruz.",
          icon: Camera,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/brown-vintage-pattern-old-wall-rich-vintage-retro-pattern-interior_482257-31465.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-human-hand-putting-signature-official-paper-office_23-2148182971.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-office-desk-with-growth-chart-laptop_23-2148780610.jpg",
          imageAlt: "financial investment growth data",
        },
      ]}
      title="Hizmetlerimiz"
      description="Sektörde fark yaratan uzmanlık alanlarımız."
    />
  </div>

  <div id="referral" data-section="referral">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "%30",
          title: "Komisyon Payı",
          description: "Başarı garantili ortaklık.",
          imageSrc: "http://img.b2bpic.net/free-photo/sharing-ideas-with-pretty-girlfriend_1098-15697.jpg",
        },
        {
          id: "m2",
          value: "100+",
          title: "Mutlu İş Ortağı",
          description: "Şeffaf kazanç süreci.",
          imageSrc: "http://img.b2bpic.net/free-photo/data-analysis-summary-graph-arrow-up_53876-133586.jpg",
        },
        {
          id: "m3",
          value: "48s",
          title: "İşleme Alım",
          description: "En hızlı geri dönüş.",
          imageSrc: "http://img.b2bpic.net/free-photo/crop-man-holding-paper-house_23-2147764240.jpg",
        },
      ]}
      title="Kazan Kazan Sistemi"
      description="Gayrimenkulünüzü bize yönlendirin, başarılı satış sonrası kazancı paylaşalım."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Ebru S.",
          role: "Yatırımcı",
          company: "UK Realty Partner",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-with-digital-tablet_1098-651.jpg",
        },
        {
          id: "t2",
          name: "Burak Ç.",
          role: "Ev Sahibi",
          company: "UK Realty Partner",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-posing-outdoors_23-2150322079.jpg",
        },
        {
          id: "t3",
          name: "Deniz K.",
          role: "Kiracı",
          company: "UK Realty Partner",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/male-real-estate-agent-doing-business-showing-house-potential-buying-couple_23-2150164666.jpg",
        },
        {
          id: "t4",
          name: "Fırat O.",
          role: "Yatırımcı",
          company: "UK Realty Partner",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-middle-aged-hispanic-cheerful-female-with-curly-hair_181624-53321.jpg",
        },
        {
          id: "t5",
          name: "Merve Y.",
          role: "Gayrimenkul Sahibi",
          company: "UK Realty Partner",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-touching-marble-bust_171337-16535.jpg",
        },
      ]}
      title="Neler Söylüyorlar?"
      description="UK Realty ailesi ile çalışanların deneyimleri."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Bize Ulaşın"
      description="Profesyonel ekibimiz size destek olmak için hazır."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Ad Soyad",
        },
        {
          name: "email",
          type: "email",
          placeholder: "E-posta",
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Telefon",
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Mesajınız",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-cityscape-with-silhouettes-street-lamp-buildings-sunset_181624-43829.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/new-york-city-manhattan-skyline-aerial-panorama_649448-1452.jpg"
      logoText="UK Realty"
      columns={[
        {
          title: "UK Realty",
          items: [
            {
              label: "Anasayfa",
              href: "#hero",
            },
            {
              label: "Portföy",
              href: "#portfolio",
            },
            {
              label: "İletişim",
              href: "#contact",
            },
          ],
        },
        {
          title: "İletişim",
          items: [
            {
              label: "+90 536 919 58 96",
              href: "tel:+905369195896",
            },
            {
              label: "@ukrealtyofficial",
              href: "https://instagram.com/ukrealtyofficial",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

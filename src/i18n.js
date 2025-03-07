import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome",
      "login": "Login",
      "about_us": "About Us",
      "services": "Services",
      "contact": "Contact",
      "home": "Home",
      "properties": "Properties",
      "listingh": "Listing",
      "Category": "Category",
      "location": "Location",
      "locationformtext": "Please select your city and neighborhood.",
      "selectCity": "Select City",
      "selectNeighborhood": "Select Neighborhood",
      "fullAddress": "Full Address",
      "streetName": "Street Name",
      "unitNumber": "Unit Number",
      "province": "Province",
      "city": "City",
      "country": "Country",
      "ownerName": "Owner Name",
      "lastSalePrice": "Last Sale Price",
      "lastSaleDate": "Last Sale Date",
      "surfaceArea": "Surface Area",
      "meterSquare": "Meter Square",
      "footSquare": "Foot Square",
      "surfaceAreaPlaceholder": "Enter surface area",
      "propertyDetails": "Property Details",
      "ownershipType": "Ownership Type",
      "registrationType": "Registration Type",
      "landRegistryOffice": "Land Registry Office",
      "landRegistryStatus": "Land Registry Status",
      "propertyCode": "Property Code",
      "propertyType": "Property Type",
      "siteAndStructure": "Site and Structure",
      "size": "Size",
      "frontage": "Frontage",
      "selectZoning": "Select Zoning",
      "residential": "Residential",
      "land": "Land",
      "depth": "Depth",
      "structure": "Structure",
      "propertyDescription": "Property Description",
      "yearBuilt": "Year Built",
      "selectYearBuilt": "Select Year Built",
      "bedrooms": "Bedrooms",
      "fullBathrooms": "Full Bathrooms",
      "halfBathrooms": "Half Bathrooms",
      "fullStories": "Full Stories",
      "partialStories": "Partial Stories",
      "splitLevel": "Split Level",
      "fireplaces": "Fireplaces",
      "indoorPool": "Indoor Pool",
      "outdoorPool": "Outdoor Pool",
      "assessmentDetails": "Assessment Details",
      "currentAssessedValue": "Current Assessed Value",
      "valuationDate": "Valuation Date",
      "lastPropertyAssessmentNoticeDate": "Last Property Assessment Notice Date",
      "valuationAndSales": "Valuation and Sales",
      "saleDate": "Sale Date",
      "saleAmount": "Sale Amount",
      "type": "Type",
      "selectType": "Select Type",
      "partyTo": "Party To",
      "selectPartyTo": "Select Party To",
      "notes": "Notes",
      "demographics": "Demographics",
      "totalPopulation": "Total Population",
      "selectPopulation": "Select Population",
      "neighborhood": "Neighborhood",
      "community": "Community",
      "gender": "Gender",
      "selectGender": "Select Gender",
      "female": "Female",
      "male": "Male",
      "familyStatus": "Family Status",
      "selectFamilyStatus": "Select Family Status",
      "marriedWithChildren": "Married With Children",
      "singleWithChildren": "Single With Children",
      "ageDistribution": "Age Distribution",
      "averageHouseholdIncome": "Average Household Income",
      "selectIncome": "Select Income",
      "picture": "Picture",
      "CoverPicture": "Cover Picture",
      "freehold": "Freehold",
      "leasehold": "Leasehold",
      "registered": "Registered",
      "unregistered": "Unregistered",
      "office1": "Office 1",
      "office2": "Office 2",
      "office3": "Office 3",
      "active": "Active",
      "inactive": "Inactive",
      "commercial": "Commercial",
      "industrial": "Industrial",
      "yes": "Yes",
      "no": "No",
      "what_is_iraq_land_registry": "What is Iraq Land Registry?",
      "iraq_land_registry_description_1": "Iraq Land Registry is the authoritative web-based centralized property information platform. With its state-of-the-art mapping and complete data source for all real estate transactions, research tools, as well as a range of professional reports, Iraq Land Registry revolutionizes the way you access and analyze land and property data in Ontario.",
      "iraq_land_registry_description_2": "Discover the Iraq Land Registry Store, where subscribers can conveniently explore a wealth of resources for purchase to assist with due diligence as all the essential land and property information you need is just a click away.",
      "iraq_land_registry_description_3": "Equipped with Iraq Land Registry, you’ll have the tools at your fingertips to become the go-to expert in your field.",
      "FollowUs": "Follow Us",
      "Help": "Help",
      "About": "About",
      "OurProperties": "Our Properties",
      "PropertyForSale": "Property For Sale",
      "PropertyForRent": "Property For Rent",
      "Newsletter": "Newsletter",
      "newsletterDescription": "Your Weekly/Monthly Dose of Knowledge and Inspiration",
      "emailPlaceholder": "Your email address",
      "subscribeSuccess": "You have successfully subscribed.",
      "subscribeError": "Subscription failed. Please try again.",
      "TermsofService": "Terms of Service",
      "PrivacyPolicy": "Privacy Policy",
      "poweredBy": "Powered by Oasbit",
      "copyright": "©2025 Iraq Land Registry. All Rights Reserved.",
      "ContactUs": "Contact Us",
      "AboutUs": "About Us",
      "SiteMap": "Site Map",
      "proven_trusted": "Proven & Trusted",
      "reporting": "Reporting",
      "iraq_land_registry_description": "Iraq Land Registry® is the single source of authoritative property information in Ontario. With the ability to verify ownership, create property detail reports, access to comprehensive neighbourhood sales and various demographics reports, Iraq Land Registry subscribers have access to the critical property and land data they need to be successful.",
      "years_in_land_registration": "30+",
      "years": "Years in land registration",
      "properties_available": "7,000,000+",
      "properties_in_ontario": "Properties available for search in Ontario",
      "canadian_users": "100,000+",
      "users_trust_us": "Canadian users that trust us",
      "Dashboard": "Dashboard",
      "faq1_question": "01 - How to Create an Account",
      "faq1_answer": "Creating an account on Beseqar is quick, easy, and completely free. Just follow these simple steps:",
      "faq1_step1": "Go to the Website – Click on the Login or Sign Up button in the header.",
      "faq1_step2": "Enter Your Phone Number – Input your phone number and hit Next.",
      "faq1_step3": "Verify via WhatsApp – Select Verify via WhatsApp, and a code will be sent to your WhatsApp.",
      "faq1_step4": "Enter the Verification Code – Insert the PIN from WhatsApp into the prompt and hit Next.",
      "faq1_step5": "Set Up Your Password – Once verified, create a password to use for future logins.",
      "faq2_question": "02 - How to List a Property",
      "faq2_answer": "Listing your property on Beseqar is simple and takes just a few steps. Follow these instructions to get started:",
      "faq2_step1": "Sign In – Make sure you are logged into your account.",
      "faq2_step2": "Add a New Listing – Click on 'Add New Listing' from the header.",
      "faq2_step3": "Choose Listing Type – Select whether you are listing a property for sale or rent.",
      "faq2_step4": "Enter Property Details – Choose the property type, upload photos and videos, and fill in all required fields.",
      "faq2_step5": "Set Listing Preferences – Select the duration for your listing and any add-ons to enhance visibility and conversion.",
      "faq2_step6": "Complete Payment & Verification – Once payment is successful, allow time for our team to verify your listing. You will receive a WhatsApp message confirming whether your listing is approved or needs adjustments, with a link to view it.",
      "faq3_question": "03 - How to Edit Your Properties",
      "faq3_answer": "To edit your property listing, it must be posted first. If you haven’t listed a property yet, please follow the listing steps first.",
      "faq3_step1": "Sign In – Make sure you are logged into your account.",
      "faq3_step2": "Go to Your Profile – Click on your profile icon, then select Manage Account.",
      "faq3_step3": "Access My Properties – Navigate to My Properties, where you will see all your listed properties.",
      "faq3_step4": "Find the Edit Option – In the last column of the table, look for the Action column and click Edit.",
      "faq3_step5": "Update Property Details – You’ll be taken to the order form. Update the necessary details and submit for approval.",
      "faq3_step6": "Wait for Approval – Once reviewed, you will receive a WhatsApp notification confirming approval or requesting further changes, with a link to view your listing.",
      "helpdesk": "Help & Resources",
      "contactUs": "Contact Us",
      "address": "Address",
      "baghdadIraq": "Baghdad, Iraq",
      "information": "Information",
      "phoneNumber": "+964-772-810-0666",
      "emailAddress": "info@iraqlandregistry.com",
      "opentime": "Opentime",
      "opentimeDetails": "Monday - Friday: 08:00 - 20:00 \n Saturday - Sunday: 10:00 - 18:00",
      "followUs": "Follow Us",
      "dontHesitate": "Don’t hesitate to reach out",
      "contactBody": "Whether you are looking to rent, buy, or sell. We are here 7 days a week to answer any questions that you might have.",
      "fullName": "Full Name",
      "yourName": "Your name",
      "email": "Email",
      "phoneNumbers": "Phone Numbers",
      "subject": "Subject",
      "enterKeyword": "Enter Keyword",
      "yourMessage": "Your Message",
      "message": "Message",
      "sendMessage": "Send Message",
      "contact_us": "Contact Us",
      "admins": "Admins",
      "addAdmin": "Add Admin",
      "searchAdmins": "Search admins...",
      "areYouSure": "Are you sure?",
      "cannotRevert": "You won't be able to revert this!",
      "yesDelete": "Yes, delete it!",
      "noCancel": "No, cancel!",
      "deleted": "Deleted!",
      "userDeleted": "User has been deleted.",
      "error": "Error!",
      "deleteError": "An error occurred while deleting the user.",
      "agents": "Agents",
      "addAgent": "Add Agent",
      "searchAgents": "Search agents...",
      "downloads": "Downloads",
      "searchDownloads": "Search downloads...",
      "listings": "Listings",
      "addListing": "Add Listing",
      "searchListings": "Search listings...",
      "logs": "Logs",
      "searchLogs": "Search logs...",
      "superAdmins": "Super Admins",
      "addSuperAdmin": "Add Super Admin",
      "searchSuperAdmins": "Search super admins...",
      "superAdminProfile": "Super Admin Profile",
      "uploadCoverImage": "Upload Cover Image",
      "uploadProfileImage": "Upload Profile Image",
      "dateOfBirth": "Date of Birth",
      "mobileNumber": "Mobile Number",
      "profileLink": "Profile Link",
      "success": "Success!",
      "userCreated": "User created successfully and account creation link sent",
      "validationError": "Error creating user, make sure its phone or email are not already in use",
      "genericError": "An error occurred",
      "addUser": "Add {{userType}}",
      "phone": "Phone",
      "role": "Role",
      "cancel": "Cancel",
      "add": "Add",
      "editUser": "Edit User",
      "username": "Username",
      "status": "Status",
      "admin": "Admin",
      "superAdmin": "Super Admin",
      "agent": "Agent",
      "approved": "Approved",
      "pending": "Pending",
      "rejected": "Rejected",
      "save": "Save",
      "userUpdated": "User Updated Successfully",
      "updateError": "Error updating user",
      "actions": "Actions",
      "noData": "No data available",
      "search": "Search...",
      "filterBy": "Filter by...",
      "id": "ID",
      "title": "Title",
      "lat": "Latitude",
      "lng": "Longitude",
      "images": "Images",
      "ownership": "Ownership",
      "created_at": "Created At",
      "updated_at": "Updated At",
      "createdAt": "Created At",
      "updatedAt": "Updated At",
      "zoning": "Zoning",
      "propertyId": "Property ID",
      "action": "Action",
      "changes": "Changes",
      "previousState": "Previous State",
      "pageUnderConstruction": "Page Under Construction",
      "workingHard": "We are working hard to bring you this feature. Please check back later.",
      "goBackHome": "Go back to Home",
      "profile": "Profile",
      "paymentMethod": "Payment Method",
      "logout": "Logout",
      "heroTitle": "Iraq Land Registry – The Future of Property Search in Iraq",
      "heroSubtitle": "Unlock Verified Property Data with Ease",
      "welcomeTitle": "Welcome to Iraq Land Registry",
      "welcomeDescription": "Iraq’s premier online platform for accessing official property records, ownership details, and real estate insights. Whether you're a real estate professional, investor, or government entity, our system provides instant access to the most accurate and up-to-date land information across Iraq.",
      "whyChooseUsTitle": "Why Choose Iraq Land Registry?",
      "verifiedDataTitle": "✔ Verified & Accurate Data",
      "verifiedDataDescription": "Our platform is directly connected to authoritative sources, ensuring real-time property ownership verification and historical transaction records.",
      "mappingTitle": "✔ Advanced Mapping & GIS Integration",
      "mappingDescription": "View high-resolution parcel maps, property boundaries, and zoning classifications with our interactive GIS-powered search tools.",
      "propertyReportsTitle": "✔ Instant Property Reports & Legal Documents",
      "propertyReportsDescription": "Generate title reports, ownership history, transaction records, and legal documents within minutes.",
      "nationwideCoverageTitle": "✔ Nationwide Coverage",
      "nationwideCoverageDescription": "Access land registry data from all major provinces and municipalities across Iraq, ensuring full transparency and compliance.",
      "featuresTitle": "Powerful Features for Every Industry",
      "ownershipVerificationTitle": "🔹 Property Ownership Verification",
      "ownershipVerificationDescription": "Instantly verify landowners and past transactions.",
      "parcelMappingTitle": "🔹 Parcel Mapping & Boundary Insights",
      "parcelMappingDescription": "Explore detailed, interactive maps.",
      "salesHistoryTitle": "🔹 Sales & Mortgage History",
      "salesHistoryDescription": "Track previous sales, transfers, and financial claims.",
      "zoningInfoTitle": "🔹 Zoning & Land Use Information",
      "zoningInfoDescription": "Understand legal restrictions and development potential.",
      "legalReportsTitle": "🔹 Downloadable Legal Reports",
      "legalReportsDescription": "Get title deeds, cadastral records, and transaction reports.",
      "customSearchTitle": "🔹 Custom Search & Filters",
      "customSearchDescription": "Find properties using owner names, lot numbers, or GPS coordinates.",
      "whoCanBenefitTitle": "Who Can Benefit from Iraq Land Registry?",
      "realEstateAgentsTitle": "🏢 Real Estate Agents & Developers",
      "realEstateAgentsDescription": "Validate property details and streamline transactions.",
      "investorsTitle": "📈 Investors & Financial Institutions",
      "investorsDescription": "Assess land value and secure investment decisions.",
      "governmentAgenciesTitle": "🏛 Government Agencies & Legal Professionals",
      "governmentAgenciesDescription": "Access official property records for legal and regulatory processes.",
      "homebuyersTitle": "🏡 Homebuyers & Sellers",
      "homebuyersDescription": "Verify ownership before making a purchase.",
      "seamlessAccessTitle": "Seamless Access, Anytime, Anywhere",
      "seamlessAccessDescription": "Our user-friendly web application is available 24/7, ensuring you have access to the latest property records whenever you need them. With a simple, intuitive interface and powerful search capabilities, Iraq Land Registry makes property verification easier than ever.",
      "startSearchNow": "🔍 Start Your Search Now – Find Verified Property Information in Seconds!",
      "callToActionTitle": "Sign up today and experience the most reliable real estate data platform in Iraq.",
      "SignUpNow": "Sign Up Now",
    }
  },
  ar: {
    translation: {
      "welcome": "أهلا بك",
      "login": "تسجيل الدخول",
      "about_us": "معلومات عنا",
      "services": "خدمات",
      "contact": "اتصل",
      "home": "الصفحة الرئيسية",
      "properties": "العقارات",
      "listingh": "قائمة",
      "Category": "الفئة",
      "location": "الموقع",
      "locationformtext": "يرجى اختيار مدينتك وحيك.",
      "selectCity": "اختر المدينة",
      "selectNeighborhood": "اختر الحي",
      "fullAddress": "العنوان الكامل",
      "streetName": "اسم الشارع",
      "unitNumber": "رقم الوحدة",
      "province": "المقاطعة",
      "city": "المدينة",
      "country": "البلد",
      "ownerName": "اسم المالك",
      "lastSalePrice": "سعر البيع الأخير",
      "lastSaleDate": "تاريخ البيع الأخير",
      "surfaceArea": "مساحة السطح",
      "meterSquare": "متر مربع",
      "footSquare": "قدم مربع",
      "surfaceAreaPlaceholder": "أدخل مساحة السطح",
      "propertyDetails": "تفاصيل العقار",
      "ownershipType": "نوع الملكية",
      "registrationType": "نوع التسجيل",
      "landRegistryOffice": "مكتب تسجيل الأراضي",
      "landRegistryStatus": "حالة تسجيل الأراضي",
      "propertyCode": "رمز العقار",
      "propertyType": "نوع العقار",
      "siteAndStructure": "الموقع والبنية",
      "size": "الحجم",
      "frontage": "الواجهة",
      "selectZoning": "اختر المنطقة",
      "residential": "سكني",
      "land": "أرض",
      "depth": "العمق",
      "structure": "البنية",
      "propertyDescription": "وصف العقار",
      "yearBuilt": "سنة البناء",
      "selectYearBuilt": "اختر سنة البناء",
      "bedrooms": "غرف النوم",
      "fullBathrooms": "الحمامات الكاملة",
      "halfBathrooms": "الحمامات النصفية",
      "fullStories": "الطوابق الكاملة",
      "partialStories": "الطوابق الجزئية",
      "splitLevel": "مستوى منفصل",
      "fireplaces": "المواقد",
      "indoorPool": "حمام سباحة داخلي",
      "outdoorPool": "حمام سباحة خارجي",
      "assessmentDetails": "تفاصيل التقييم",
      "currentAssessedValue": "القيمة المقدرة الحالية",
      "valuationDate": "تاريخ التقييم",
      "lastPropertyAssessmentNoticeDate": "تاريخ آخر إشعار تقييم للعقار",
      "valuationAndSales": "التقييم والمبيعات",
      "saleDate": "تاريخ البيع",
      "saleAmount": "مبلغ البيع",
      "type": "النوع",
      "selectType": "اختر النوع",
      "partyTo": "الطرف إلى",
      "selectPartyTo": "اختر الطرف إلى",
      "notes": "ملاحظات",
      "demographics": "التركيبة السكانية",
      "totalPopulation": "إجمالي السكان",
      "selectPopulation": "اختر السكان",
      "neighborhood": "الحي",
      "community": "المجتمع",
      "gender": "الجنس",
      "selectGender": "اختر الجنس",
      "female": "أنثى",
      "male": "ذكر",
      "familyStatus": "الحالة العائلية",
      "selectFamilyStatus": "اختر الحالة العائلية",
      "marriedWithChildren": "متزوج مع أطفال",
      "singleWithChildren": "أعزب مع أطفال",
      "ageDistribution": "توزيع الأعمار",
      "averageHouseholdIncome": "متوسط دخل الأسرة",
      "selectIncome": "اختر الدخل",
      "picture": "صورة",
      "CoverPicture": "صورة الغلاف",
      "freehold": "ملكية حرة",
      "leasehold": "إيجار",
      "registered": "مسجل",
      "unregistered": "غير مسجل",
      "office1": "مكتب 1",
      "office2": "مكتب 2",
      "office3": "مكتب 3",
      "active": "نشط",
      "inactive": "غير نشط",
      "commercial": "تجاري",
      "industrial": "صناعي",
      "yes": "نعم",
      "no": "لا",
      "what_is_iraq_land_registry": "ما هو سجل الأراضي العراقي؟",
      "iraq_land_registry_description_1": "سجل الأراضي العراقي هو منصة معلومات العقارات المركزية المستندة إلى الويب. مع خرائطه المتطورة ومصدر البيانات الكامل لجميع المعاملات العقارية، وأدوات البحث، بالإضافة إلى مجموعة من التقارير المهنية، يحدث سجل الأراضي العراقي ثورة في طريقة الوصول إلى بيانات الأراضي والعقارات وتحليلها في أونتاريو.",
      "iraq_land_registry_description_2": "اكتشف متجر سجل الأراضي العراقي، حيث يمكن للمشتركين استكشاف ثروة من الموارد للشراء للمساعدة في العناية الواجبة حيث أن جميع المعلومات الأساسية عن الأراضي والعقارات التي تحتاجها على بعد نقرة واحدة.",
      "iraq_land_registry_description_3": "مجهزًا بسجل الأراضي العراقي، سيكون لديك الأدوات في متناول يدك لتصبح الخبير المفضل في مجالك.",
      "FollowUs": "تابعنا",
      "Help": "مساعدة",
      "About": "حول",
      "OurProperties": "عقاراتنا",
      "PropertyForSale": "عقار للبيع",
      "PropertyForRent": "عقار للإيجار",
      "Newsletter": "النشرة الإخبارية",
      "newsletterDescription": "جرعتك الأسبوعية / الشهرية من المعرفة والإلهام",
      "emailPlaceholder": "عنوان بريدك الإلكتروني",
      "subscribeSuccess": "لقد اشتركت بنجاح.",
      "subscribeError": "فشل الاشتراك. حاول مرة اخرى.",
      "TermsofService": "شروط الخدمة",
      "PrivacyPolicy": "سياسة الخصوصية",
      "poweredBy": "مدعوم من Oasbit",
      "copyright": "©2025 Iraq Land Registry. جميع الحقوق محفوظة.",
      "ContactUs": "اتصل بنا",
      "AboutUs": "معلومات عنا",
      "SiteMap": "خريطة الموقع",
      "proven_trusted": "موثوق ومجرب",
      "reporting": "التقارير",
      "iraq_land_registry_description": "سجل الأراضي العراقي<sup>®</sup> هو المصدر الوحيد للمعلومات العقارية الموثوقة في أونتاريو. مع القدرة على التحقق من الملكية، وإنشاء تقارير تفصيلية عن العقارات، والوصول إلى مبيعات الأحياء الشاملة وتقارير الديموغرافيا المختلفة، يتمتع مشتركو سجل الأراضي العراقي بإمكانية الوصول إلى البيانات العقارية والأرضية الحيوية التي يحتاجونها للنجاح.",
      "years_in_land_registration": "30+",
      "years": "سنوات في تسجيل الأراضي",
      "properties_available": "7,000,000+",
      "properties_in_ontario": "العقارات المتاحة للبحث في أونتاريو",
      "canadian_users": "100,000+",
      "users_trust_us": "المستخدمين الكنديين الذين يثقون بنا",
      "Dashboard": "لوحة القيادة",
      "faq1_question": "01 - كيفية إنشاء حساب",
      "faq1_answer": "إن إنشاء حساب على Beseqar سريع وسهل ومجاني تمامًا. فقط اتبع هذه الخطوات البسيطة:",
      "faq1_step1": "اذهب إلى الموقع – انقر على زر تسجيل الدخول أو التسجيل في الرأس.",
      "faq1_step2": "أدخل رقم هاتفك – أدخل رقم هاتفك واضغط على التالي.",
      "faq1_step3": "التحقق عبر WhatsApp – اختر التحقق عبر WhatsApp، وسيتم إرسال رمز إلى WhatsApp الخاص بك.",
      "faq1_step4": "أدخل رمز التحقق – أدخل الرمز من WhatsApp في الموجه واضغط على التالي.",
      "faq1_step5": "إعداد كلمة المرور الخاصة بك – بمجرد التحقق، قم بإنشاء كلمة مرور لاستخدامها في عمليات تسجيل الدخول المستقبلية.",
      "faq2_question": "02 - كيفية إدراج عقار",
      "faq2_answer": "إدراج عقارك على Beseqar بسيط ويستغرق بضع خطوات فقط. اتبع هذه التعليمات للبدء:",
      "faq2_step1": "تسجيل الدخول – تأكد من تسجيل الدخول إلى حسابك.",
      "faq2_step2": "إضافة قائمة جديدة – انقر على 'إضافة قائمة جديدة' من الرأس.",
      "faq2_step3": "اختر نوع القائمة – اختر ما إذا كنت تقوم بإدراج عقار للبيع أو الإيجار.",
      "faq2_step4": "أدخل تفاصيل العقار – اختر نوع العقار، وقم بتحميل الصور ومقاطع الفيديو، واملأ جميع الحقول المطلوبة.",
      "faq2_step5": "تعيين تفضيلات القائمة – اختر مدة قائمتك وأي إضافات لتعزيز الرؤية والتحويل.",
      "faq2_step6": "إكمال الدفع والتحقق – بمجرد نجاح الدفع، اسمح لبعض الوقت لفريقنا للتحقق من قائمتك. ستتلقى رسالة WhatsApp تؤكد ما إذا كانت قائمتك معتمدة أو تحتاج إلى تعديلات، مع رابط لعرضها.",
      "faq3_question": "03 - كيفية تعديل عقاراتك",
      "faq3_answer": "لتعديل قائمة عقارك، يجب نشرها أولاً. إذا لم تقم بإدراج عقار بعد، يرجى اتباع خطوات الإدراج أولاً.",
      "faq3_step1": "تسجيل الدخول – تأكد من تسجيل الدخول إلى حسابك.",
      "faq3_step2": "اذهب إلى ملفك الشخصي – انقر على أيقونة ملفك الشخصي، ثم اختر إدارة الحساب.",
      "faq3_step3": "الوصول إلى عقاراتي – انتقل إلى عقاراتي، حيث سترى جميع العقارات المدرجة الخاصة بك.",
      "faq3_step4": "ابحث عن خيار التعديل – في العمود الأخير من الجدول، ابحث عن عمود الإجراء وانقر على تعديل.",
      "faq3_step5": "تحديث تفاصيل العقار – سيتم نقلك إلى نموذج الطلب. قم بتحديث التفاصيل اللازمة وقدمها للموافقة.",
      "faq3_step6": "انتظر الموافقة – بمجرد المراجعة، ستتلقى إشعارًا عبر WhatsApp يؤكد الموافقة أو يطلب المزيد من التغييرات، مع رابط لعرض قائمتك.",
      "helpdesk": "المساعدة والموارد",
      "contactUs": "اتصل بنا",
      "address": "عنوان",
      "baghdadIraq": "بغداد، العراق",
      "information": "معلومات",
      "phoneNumber": "+964-772-810-0666",
      "emailAddress": "info@iraqlandregistry.com",
      "opentime": "وقت العمل",
      "opentimeDetails": "الاثنين - الجمعة: 08:00 - 20:00 \n السبت - الأحد: 10:00 - 18:00",
      "followUs": "تابعنا",
      "dontHesitate": "لا تتردد في التواصل",
      "contactBody": "سواء كنت تبحث عن الإيجار أو الشراء أو البيع. نحن هنا 7 أيام في الأسبوع للإجابة على أي أسئلة قد تكون لديك.",
      "fullName": "الاسم الكامل",
      "yourName": "اسمك",
      "email": "البريد الإلكتروني",
      "phoneNumbers": "أرقام الهاتف",
      "subject": "موضوع",
      "enterKeyword": "أدخل الكلمة الرئيسية",
      "yourMessage": "رسالتك",
      "message": "رسالة",
      "sendMessage": "أرسل رسالة",
      "contact_us": "اتصل بنا",
      "admins": "المشرفون",
      "addAdmin": "إضافة مشرف",
      "searchAdmins": "ابحث عن المشرفين...",
      "areYouSure": "هل أنت متأكد؟",
      "cannotRevert": "لن تتمكن من التراجع عن هذا!",
      "yesDelete": "نعم، احذفه!",
      "noCancel": "لا، إلغاء!",
      "deleted": "تم الحذف!",
      "userDeleted": "تم حذف المستخدم.",
      "error": "خطأ!",
      "deleteError": "حدث خطأ أثناء حذف المستخدم.",
      "agents": "الوكلاء",
      "addAgent": "إضافة وكيل",
      "searchAgents": "ابحث عن الوكلاء...",
      "downloads": "التنزيلات",
      "searchDownloads": "ابحث عن التنزيلات...",
      "listings": "القوائم",
      "addListing": "إضافة قائمة",
      "searchListings": "ابحث في القوائم...",
      "logs": "السجلات",
      "searchLogs": "ابحث في السجلات...",
      "superAdmins": "المشرفون الفائقون",
      "addSuperAdmin": "إضافة مشرف فائق",
      "searchSuperAdmins": "ابحث عن المشرفين الفائقين...",
      "superAdminProfile": "ملف المشرف الفائق",
      "uploadCoverImage": "تحميل صورة الغلاف",
      "uploadProfileImage": "تحميل صورة الملف الشخصي",
      "dateOfBirth": "تاريخ الميلاد",
      "mobileNumber": "رقم الجوال",
      "profileLink": "رابط الملف الشخصي",
      "success": "نجاح!",
      "userCreated": "تم إنشاء المستخدم بنجاح وإرسال رابط إنشاء الحساب",
      "validationError": "خطأ في إنشاء المستخدم، تأكد من أن الهاتف أو البريد الإلكتروني غير مستخدم بالفعل",
      "genericError": "حدث خطأ",
      "addUser": "إضافة {{userType}}",
      "phone": "الهاتف",
      "role": "الدور",
      "cancel": "إلغاء",
      "add": "إضافة",
      "editUser": "تعديل المستخدم",
      "username": "اسم المستخدم",
      "status": "الحالة",
      "admin": "مشرف",
      "superAdmin": "مشرف فائق",
      "agent": "وكيل",
      "approved": "موافق عليه",
      "pending": "قيد الانتظار",
      "rejected": "مرفوض",
      "save": "حفظ",
      "userUpdated": "تم تحديث المستخدم بنجاح",
      "updateError": "خطأ في تحديث المستخدم",
      "actions": "الإجراءات",
      "noData": "لا توجد بيانات",
      "search": "بحث...",
      "filterBy": "تصفية بواسطة...",
      "id": "معرف",
      "title": "عنوان",
      "lat": "خط العرض",
      "lng": "خط الطول",
      "images": "صور",
      "ownership": "ملكية",
      "created_at": "تاريخ الإنشاء",
      "updated_at": "تاريخ التحديث",
      "createdAt": "تاريخ الإنشاء",
      "updatedAt": "تاريخ التحديث",
      "zoning": "التقسيم",
      "propertyId": "معرف العقار",
      "action": "الإجراء",
      "changes": "التغييرات",
      "previousState": "الحالة السابقة",
      "pageUnderConstruction": "الصفحة تحت الإنشاء",
      "workingHard": "نحن نعمل بجد لتقديم هذه الميزة لك. يرجى التحقق مرة أخرى لاحقًا.",
      "goBackHome": "العودة إلى الصفحة الرئيسية",
      "profile": "الملف الشخصي",
      "paymentMethod": "طريقة الدفع",
      "logout": "تسجيل الخروج",
      "heroTitle": "سجل الأراضي العراقي – مستقبل البحث عن العقارات في العراق",
      "heroSubtitle": "افتح بيانات العقارات الموثوقة بسهولة",
      "welcomeTitle": "مرحبًا بكم في سجل الأراضي العراقي",
      "welcomeDescription": "المنصة الإلكترونية الأولى في العراق للوصول إلى السجلات العقارية الرسمية وتفاصيل الملكية والرؤى العقارية. سواء كنت محترفًا عقاريًا أو مستثمرًا أو جهة حكومية، يوفر نظامنا وصولاً فوريًا إلى أحدث المعلومات العقارية وأكثرها دقة في جميع أنحاء العراق.",
      "whyChooseUsTitle": "لماذا تختار سجل الأراضي العراقي؟",
      "verifiedDataTitle": "✔ بيانات موثوقة ودقيقة",
      "verifiedDataDescription": "منصتنا متصلة مباشرة بالمصادر الموثوقة، مما يضمن التحقق من ملكية العقارات في الوقت الفعلي وسجلات المعاملات التاريخية.",
      "mappingTitle": "✔ تكامل متقدم للخرائط ونظام المعلومات الجغرافية",
      "mappingDescription": "عرض خرائط القطع عالية الدقة وحدود العقارات وتصنيفات المناطق باستخدام أدوات البحث التفاعلية المدعومة بنظام المعلومات الجغرافية.",
      "propertyReportsTitle": "✔ تقارير عقارية فورية ووثائق قانونية",
      "propertyReportsDescription": "إنشاء تقارير الملكية وسجل الملكية وسجلات المعاملات والوثائق القانونية في غضون دقائق.",
      "nationwideCoverageTitle": "✔ تغطية وطنية",
      "nationwideCoverageDescription": "الوصول إلى بيانات سجل الأراضي من جميع المحافظات والبلديات الرئيسية في العراق، مما يضمن الشفافية الكاملة والامتثال.",
      "featuresTitle": "ميزات قوية لكل صناعة",
      "ownershipVerificationTitle": "🔹 التحقق من ملكية العقارات",
      "ownershipVerificationDescription": "التحقق الفوري من مالكي الأراضي والمعاملات السابقة.",
      "parcelMappingTitle": "🔹 رسم خرائط القطع ورؤى الحدود",
      "parcelMappingDescription": "استكشاف خرائط تفاعلية مفصلة.",
      "salesHistoryTitle": "🔹 تاريخ المبيعات والرهن العقاري",
      "salesHistoryDescription": "تتبع المبيعات السابقة والتحويلات والمطالبات المالية.",
      "zoningInfoTitle": "🔹 معلومات المناطق واستخدام الأراضي",
      "zoningInfoDescription": "فهم القيود القانونية وإمكانيات التطوير.",
      "legalReportsTitle": "🔹 تقارير قانونية قابلة للتنزيل",
      "legalReportsDescription": "الحصول على سندات الملكية والسجلات العقارية وتقارير المعاملات.",
      "customSearchTitle": "🔹 بحث مخصص وفلاتر",
      "customSearchDescription": "البحث عن العقارات باستخدام أسماء المالكين أو أرقام القطع أو إحداثيات GPS.",
      "whoCanBenefitTitle": "من يمكنه الاستفادة من سجل الأراضي العراقي؟",
      "realEstateAgentsTitle": "🏢 وكلاء العقارات والمطورون",
      "realEstateAgentsDescription": "التحقق من تفاصيل العقارات وتبسيط المعاملات.",
      "investorsTitle": "📈 المستثمرون والمؤسسات المالية",
      "investorsDescription": "تقييم قيمة الأراضي واتخاذ قرارات استثمارية آمنة.",
      "governmentAgenciesTitle": "🏛 الوكالات الحكومية والمحترفون القانونيون",
      "governmentAgenciesDescription": "الوصول إلى السجلات العقارية الرسمية للعمليات القانونية والتنظيمية.",
      "homebuyersTitle": "🏡 المشترون والبائعون",
      "homebuyersDescription": "التحقق من الملكية قبل الشراء.",
      "seamlessAccessTitle": "الوصول السلس في أي وقت وفي أي مكان",
      "seamlessAccessDescription": "تطبيق الويب سهل الاستخدام الخاص بنا متاح على مدار الساعة طوال أيام الأسبوع، مما يضمن لك الوصول إلى أحدث السجلات العقارية كلما احتجت إليها. بواجهة بسيطة وبديهية وقدرات بحث قوية، يجعل سجل الأراضي العراقي التحقق من العقارات أسهل من أي وقت مضى.",
      "startSearchNow": "🔍 ابدأ البحث الآن – ابحث عن معلومات العقارات الموثوقة في ثوانٍ!",
      "callToActionTitle": "اشترك اليوم واختبر منصة بيانات العقارات الأكثر موثوقية في العراق.",
      "SignUpNow": "اشترك الآن",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
/* ===========================================
   WOOKZ.NFT - Main JavaScript
   =========================================== */

// DOM Elements

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initScrollEffects();
    initAnimations();
    initGallery();
});



// Scroll effects
function initScrollEffects() {
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animations
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.card, .roadmap__item, .stat, .feature');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
}


// Generate Wookz data for all videos
function generateWookzData() {
    const wookzData = [];
    const cdnBaseUrl = 'https://vz-b5a7d51c-9e0.b-cdn.net';
    
    // Gen 0 video IDs and character names (33 videos) - 001-033
    const gen0Data = [
        { id: 'c29a0313-979b-43fc-8a4e-153808989e80', name: 'Wookzman' },
        { id: 'c958d329-72b6-4619-8d18-26d4767f3963', name: 'Fitty' },
        { id: '79063ecb-5953-4bf8-a41d-e6c6f196d044', name: 'Atem' },
        { id: '83815062-3723-4dc7-b400-92515296cff7', name: 'Shak' },
        { id: '4e63bc23-fae2-4292-b04b-ef951af7fdc4', name: 'Snow' },
        { id: '1e2a333d-f574-45a0-b0c3-3ab28774f0a6', name: 'Trips' },
        { id: '49d43eec-73e1-4176-b735-c9c2973244b7', name: 'Ned' },
        { id: '3fea48f1-0b36-4eb6-bca8-629d450a9eca', name: 'Cyberz' },
        { id: 'c53c2fdd-abd9-4ac3-82b8-a6a2bf53e275', name: 'Straws' },
        { id: 'ffc8af50-42ed-4778-94c0-78a8944797d7', name: 'Tribes' },
        { id: 'df41739f-2dd1-47a3-b690-60b5a3dc022c', name: 'Rulex' },
        { id: '63c2e639-c7dd-4146-bc88-176c191572eb', name: 'All Good' },
        { id: 'd0ccc55a-d3fb-4565-87de-c3ada0d05d0b', name: 'Dr. Mark' },
        { id: '6a1af156-a56b-4f71-b3f6-f01f61edf4f5', name: 'Joe' },
        { id: 'd2dc7666-0828-4fc9-9ac9-802aa8c5e17a', name: 'Boe' },
        { id: '99eeb734-3aab-4310-8775-b8e74c66df67', name: 'H-Bag' },
        { id: 'f9e60d3f-a0f1-49ae-80ab-745aa03a0f39', name: 'Roberto' },
        { id: '963b90bf-5e51-4959-987f-b5fe85cd2113', name: 'Hedera Pong' },
        { id: '030ac4ec-27c6-4149-9e21-7150c9eadc60', name: 'Cliff' },
        { id: '69bf4948-56a5-4897-b65f-6531ed9e3e68', name: 'Cube' },
        { id: '030e2688-1b17-44f7-96b6-cdd1e0e44665', name: 'Tricksy' },
        { id: '5b844f5b-85b9-44bc-a54a-39e2a8db6306', name: 'Travis' },
        { id: 'd761d99b-ae88-4476-a751-8a3e47fe207e', name: 'Major Tom' },
        { id: '5163a660-ca55-4ef3-8ecf-bc181d216ae5', name: 'Caveman' },
        { id: '0bdf6f61-b4bb-4735-9bbe-5e03768ee622', name: 'Cheshire' },
        { id: 'af8f9306-ac13-4c29-a1f3-f3d3bcd39362', name: 'Panda' },
        { id: '30c8909b-8b6d-4cb9-b6f0-7dde0df6afa4', name: 'Danger' },
        { id: 'c2e7ed88-f89e-486a-9ff1-eaccb7a2b4d0', name: 'Jack' },
        { id: 'de4e3843-7629-44a6-a221-0947fdf8804a', name: 'Rex' },
        { id: '6da0634d-63d3-440f-b1d6-3bccba6c4c0d', name: 'Mountain' },
        { id: 'd7eb8444-7b78-40de-8a50-7b9ca091d07e', name: 'Atlas King of Water' },
        { id: 'c7f0fa84-2bea-43fc-9747-f6312ce96d35', name: 'Ashbringer King of Fire' },
        { id: '1df7094b-2bc7-4c62-831b-fc7cb66e5377', name: 'Pan King of Nature' }
    ];
    
    // Gen 1 video IDs (333 videos) - 001-333
    const gen1Data = [
        { id: 'bf43b074-8de3-487c-a620-e7f96d625c36' },
        { id: '53216959-a833-4c0b-9f86-d62b86fe9013' },
        { id: 'ce5b05bb-7848-413a-acff-eda22d0566d0' },
        { id: 'b5fd5fe3-69be-42e1-bbb4-56c6fb317e66' },
        { id: 'fa65f59d-9d62-410e-81ac-a2d896d5f296' },
        { id: '3021ce1d-de79-4ee7-bdee-5091c63a5c80' },
        { id: 'f565f0a8-30cf-4103-a4fa-97c77d38e91b' },
        { id: '3de35c00-2fa4-4321-b09b-b4151dfbbd61' },
        { id: 'ee6a9d55-fe11-4ee7-9c71-774be0da6ec0' },
        { id: 'e8812ef7-95cb-4f71-858b-d40b71657dbd' },
        { id: '7894fcdf-f4b6-4cd9-9426-464f9a992e6e' },
        { id: 'cd0d5fec-34e5-4253-8fe9-2e59e08f928b' },
        { id: 'd81d3d73-bbda-4510-a20c-345b34e8cfd2' },
        { id: '221d52fc-2956-456f-a4c8-8ed06bec4116' },
        { id: '7effac59-8bb7-4425-9f62-109ecd213aa3' },
        { id: '96831e34-9049-4b60-9a76-edbe4f3f6da3' },
        { id: '34c9c51c-1cad-488d-9c61-3eaff9a8f983' },
        { id: '61e808ba-2d2f-4000-a06f-847a9017d229' },
        { id: 'd26efe25-8acc-4818-aa7e-d173dc84ec05' },
        { id: 'dfef41c4-1c57-4def-8da5-54d262d07eab' },
        { id: '8b84b4fc-9f3d-4f61-814a-eeebf8ec6134' },
        { id: '8e97bd06-fba5-4d99-9354-b83d662b706a' },
        { id: '5505295d-5ec0-4a47-888a-3d437994bdcb' },
        { id: 'ebafc905-0e82-451a-936b-57bb60456cb1' },
        { id: 'a5429e57-9082-40a7-bc7e-afe374acef4c' },
        { id: 'a659373f-6f1d-45f9-b05e-d0bce29f15b2' },
        { id: '6cdc83d5-8d2e-4452-b182-a8bb5518130d' },
        { id: '76a85176-c741-48a4-a25f-a80b9e304198' },
        { id: '3baf493d-eeae-41d2-b730-967a6d1d93b7' },
        { id: '6c2c3280-0e04-4c0d-a2c2-df73419fd0c9' },
        { id: '56458f67-65c3-4708-bb14-a7593261d14d' },
        { id: 'd573708c-cba5-4808-9c02-71df291eec1d' },
        { id: '60004037-4b36-49a0-ba0c-66df1701d070' },
        { id: 'd0f393c4-380c-470f-9f87-8f2f505331d3' },
        { id: 'e7a1ee14-1169-444c-a403-a235d2526616' },
        { id: '8eb089aa-ebbf-4b6f-867f-df325683f5e8' },
        { id: 'c52832cc-dbd1-4f7f-9278-8789daeeed1f' },
        { id: 'dc8e9042-9830-492b-8062-0f94818f28a6' },
        { id: '9dc7bb74-ff04-442c-bf7b-c8901747829e' },
        { id: '1f8fc8b1-97fd-4c5e-a1ef-d1b3001f85a0' },
        { id: '814c7016-280d-4d9b-97dc-e18152698b88' },
        { id: '950fff3d-e072-4f0b-8a78-c2a0616995ef' },
        { id: 'f0eeaa12-cd89-416f-a2c9-026b7b09b4c0' },
        { id: '772816fd-f910-4457-bb0e-6620f3c97963' },
        { id: 'ce3b6af0-1430-4309-996e-cb12f23012ec' },
        { id: '3c3be494-8564-4c95-a4c2-dd29d5fef6b0' },
        { id: '44c85624-6ec1-4079-9de0-c609e397dff4' },
        { id: 'f4590144-487e-4e0f-b2c0-5b4c8b20f049' },
        { id: 'bdf91283-0367-4e23-8f1d-d8d6d3fcf686' },
        { id: '7771044c-ed2f-4126-8869-60e6cdd59f5f' },
        { id: '3510fcca-aafd-4564-99f8-2709b78b6494' },
        { id: 'd766b467-478e-46ef-8f74-0d42c39f4312' },
        { id: '4483d46e-bea4-4dda-ab55-03ef2409a0eb' },
        { id: '6bbb921b-cc38-40b2-810d-48f1240d34af' },
        { id: '3c7d5d01-3cdb-48de-9045-2ee1b5f369fa' },
        { id: '6e8d1fa0-02c1-49a5-9381-41c0e430ee24' },
        { id: '9e1c7383-6ae2-400d-8522-f7fa6bd2c9c5' },
        { id: '39e950b3-4ec0-4420-b791-78781daf05b7' },
        { id: '3c755a46-4b96-4e63-9ac7-0c96ac5d805d' },
        { id: '554564a1-b2ef-4c98-8f1b-2acb0de6926e' },
        { id: '52b7b3a4-dcc4-4473-b271-a910a34c1e41' },
        { id: '67652f1f-8e37-4fb4-8e0c-9a12c1689613' },
        { id: '8cd4a211-3b05-43da-8175-0d63c93901fb' },
        { id: 'd76d52cc-79e8-4624-be91-df5d58a591df' },
        { id: '978e2cae-b0fd-4858-86f3-58e5788854d7' },
        { id: '83f02b37-b3a5-4dab-9e79-8c171b5be522' },
        { id: '8e48715a-2e3d-4946-952d-7618e38684e5' },
        { id: '923de255-432c-45a5-b87c-563c0a9b8003' },
        { id: '1ed34fd2-d9bd-4de5-b68c-8eda0f773d70' },
        { id: 'ff771a40-dfc9-44b6-b0f0-802ea0be481c' },
        { id: 'a2f92085-6c36-409c-ba2d-087bedc42165' },
        { id: '07905c33-90da-462e-9c9d-dff0895c8542' },
        { id: '48c6ec3c-6b9d-451c-9508-2a6db0a17eba' },
        { id: '836ecee9-c428-40d7-ac68-c13398b5b827' },
        { id: '61f69c65-3bd7-4ad8-bb6c-cfed04065ac0' },
        { id: '74d13e3e-9b9a-4130-9e04-96b2c7c9e5bf' },
        { id: '6a628c12-149a-4b42-a248-160133c4ac42' },
        { id: '9860270c-91b1-4d37-aa58-fac880cdbcdb' },
        { id: 'd2d58870-c3b2-455b-be69-f3c3bab111b0' },
        { id: '5b9896fb-8d91-46bf-9765-ace916b9df4d' },
        { id: 'b5318c6d-d082-498b-9cbd-edecf50497e6' },
        { id: '510d7d27-fadc-4e74-b317-9111d4a64163' },
        { id: '12f4090f-65b4-4bad-aa8c-ebcd1dd5f954' },
        { id: 'c16d80f6-dcf2-4075-933a-36875be8a551' },
        { id: '890f29e2-bd98-43b3-b57b-1325da4e3fa5' },
        { id: 'bb53588d-96d0-4bdf-9922-726634e20e79' },
        { id: '3542f111-1270-4b41-80a3-4e6bc8f348fc' },
        { id: 'db4069be-d91e-4f4e-b2fd-bff7f74b3970' },
        { id: '04517159-b408-496c-b64f-ca3115c10010' },
        { id: 'fb6639fc-289d-4f34-9063-83af1a7aca7f' },
        { id: 'e69d5044-616f-4610-a067-6e6ca55ae192' },
        { id: '83d71e24-c229-4496-aee5-392064066b55' },
        { id: '9e6054f5-a838-475b-96e1-e211fe60c58a' },
        { id: '8e9cec36-7378-4b4b-b8aa-e5edffcfd027' },
        { id: '5bbe6242-05c4-40f4-a7c8-2e1ff7e5275f' },
        { id: 'ee74711d-3358-460a-8613-2215029a2995' },
        { id: '6e1a502b-719f-494e-8670-2351563a706d' },
        { id: '8a893f82-256c-4089-a75d-04412a0f40b3' },
        { id: 'c31f8049-4894-48f4-a6b7-40ab05aa509d' },
        { id: 'befc9453-64f9-4173-9d97-6f4f742cf786' },
        { id: '510a44dd-625a-4235-bd84-fc85de3d3c35' },
        { id: 'a1f74051-3ca2-49d6-bce7-18c8710f27c3' },
        { id: '98b5b16a-bcbd-4824-97bf-445481733add' },
        { id: 'c37b2fe4-41ec-4045-b989-e90f43884d76' },
        { id: '5f3d25c6-cdf2-4dbf-920e-e63b3769977d' },
        { id: 'a1eecca0-8cc7-42b5-89d7-733fb2e6f22a' },
        { id: 'b71f80e7-c75f-478e-9d2f-679a7bebd875' },
        { id: '3d254f1c-1a3e-4e4e-b11e-f97445ea4fbc' },
        { id: '7a2705c5-959b-42f2-9320-c0b32dfb3f61', name: 'Phil' },
        { id: '6914f4e6-3202-40b5-a4d1-9ebe3083792c', name: 'Rave' },
        { id: '39482f71-3688-4ae3-bc6b-73c91cc362f9', name: 'Sadiki' },
        { id: 'dbda3c92-68ed-4616-9b8c-54db71d47538', name: 'Sirens' },
        { id: '04c295cc-fb29-486e-92ee-ce8469761bad', name: 'Swartz' },
        { id: '209f2214-2af4-4622-8367-13ed1f4b6dfc', name: 'Tane' },
        { id: '275443e6-9548-48f9-8d19-6ac3968e222b', name: 'Teonan' },
        { id: 'c6f3ab80-698e-468d-b74e-f8acc6ea84de', name: 'Towly' },
        { id: '4f28b7a5-31c5-46bf-9680-7f7f7d0ad916', name: 'Wandler' },
        { id: 'c3195bd8-b4ff-4dad-8e6a-ec40cd62bbf7', name: 'Wonald' },
        { id: '6c5d8835-9d13-428e-a418-4c71ed3b1b7d', name: 'Bob Bams' },
        { id: 'f98eab71-9460-4894-a72f-3430b182851d', name: 'Gigabyte' },
        { id: 'dfa95aa6-3945-4809-ac7c-e1970c2a290f', name: 'Doc Wankenstein' },
        { id: 'b5c00d96-2c67-46a5-871d-4cd8a5c063f1', name: 'Nrgy' },
        { id: '900749dd-0695-4f39-872f-93883033ba04', name: 'Error' },
        { id: 'e6f34824-6d72-44af-9a87-0daf63bc8512', name: 'Flatman' },
        { id: '584a4b6f-197d-449a-9c05-17dc061af057', name: 'Ghostwriter' },
        { id: 'd090e0eb-05b8-4589-8c75-4e1cfab4c5d3', name: 'Goldemar' },
        { id: '41384b90-84ef-4518-9e03-89aaac538cca', name: 'Jamie L' },
        { id: '9a5c68f6-ee86-4511-92ef-6069ecbdcc58', name: 'Jessie J' },
        { id: 'e232dff2-a195-42fe-8965-6a6a8abf5342', name: 'Kev' },
        { id: '9d48df8a-0500-417b-b7ce-6b018500c1ba', name: 'Kid' },
        { id: '9a143af3-9118-462a-934d-89b512d59806', name: 'Leon' },
        { id: '5a89e185-0c24-429f-b875-555b95f8a470', name: 'Reinhold' },
        { id: '536710f3-c2db-4bf8-a275-7b0ec79b0ec5', name: 'Takeshi' },
        { id: '0d0df0a7-5385-4f9d-b8be-e7df4491fa07', name: 'Tweek' },
        { id: '2a81b083-b0d4-428d-b66a-7930e7861db6', name: 'Wankenstein Monster' },
        { id: '94973e7a-0ca5-45c4-91fd-f6452474f4b9', name: 'Mr. T' },
        { id: '93d1843d-f3f6-4186-a6f8-5d71158b7e2f', name: 'Kurt' },
        { id: '468130bd-a88c-4535-9429-e4605a0efd4d', name: 'Vader' },
        { id: 'c2c364f9-f744-4b9b-89ac-6f628da7610e', name: 'Essam' },
        { id: '6fb4245f-fecc-41eb-b289-69c56b9a3037', name: 'Divan' },
        { id: '91fff3fb-4cd6-4068-aef4-5696da94b216', name: 'Nerino' },
        { id: '9a61a1bf-5fa6-4d8b-a3cf-7990adaec5b9', name: 'Sayo' },
        { id: '2fbbca76-76e9-42ec-a5c6-7e7e5333aa98', name: 'Emiljan' },
        { id: '7fe3eaa8-d818-4221-af3d-b4da97b7330f', name: 'Kirby' },
        { id: '56c83d28-0e55-49e2-a273-614c7e500c6b', name: 'John Coffee' },
        { id: 'a884b2bd-6321-46b8-af20-fc30ac82cd78', name: 'Oda' },
        { id: '61bf2b03-bc67-4c75-874a-04c8ed07a7f2', name: 'Biters' },
        { id: '7afee0ec-dfd0-42e2-93ef-1336f71ce7c9', name: 'Milkman' },
        { id: 'd693e1c9-7bf8-4360-85ab-0d3f34c5d861', name: 'Gambler' },
        { id: 'e84c8309-993a-48f6-954a-49ee120db921', name: 'Haymitch' },
        { id: '6f7a4d01-6e87-45cf-8c8b-75fbfcbb1ecd', name: 'Don Vito' },
        { id: '2a9a4bcc-d7a5-44f4-8e70-bb3b88e7ba54', name: 'Kongs' },
        { id: 'ac7c76cf-b7be-4a6a-aebe-4e5d47ef9663', name: 'Worro' },
        { id: 'a54b8dce-f606-4652-98f1-c2b7f6ca81c9', name: 'Heisenberg' },
        { id: '57c407a0-aea4-40ea-b012-96cdfc2c78fa', name: 'Gekko' },
        { id: '907bcfc5-aa23-449b-b8a6-494462eec641', name: 'Mayfeld' },
        { id: 'c60d5dbb-4299-4cb7-97d4-35fddf37504e', name: 'Boba' },
        { id: '6a741572-f2ac-4fcb-90cd-0c1cd85c09f3', name: 'Blue Jib' },
        { id: 'fb6794bf-1ab4-4f39-af3a-a08db7875c89', name: 'Mando' },
        { id: '26a9f769-5226-4b3c-a5ff-75297ca4c57d', name: 'Captain Kidd' },
        { id: '25d2ee1f-cebc-4e41-ba9c-2a140913f499', name: 'Captain Sidd' },
        { id: '0b489f78-d38d-45cd-b022-50d72c988e76', name: 'Short' },
        { id: '0bf8aede-eda6-4ecd-8c2d-f7585564b09d', name: 'Mr. Long' },
        { id: '298f73cb-59de-4f5a-b3ea-038c0741c93b', name: 'Mr. Crypto' },
        { id: '9492c81d-a41e-4c24-9a32-040df1d2488e', name: 'Thanasis' },
        { id: '004b81cb-a795-484b-89be-a1f38627489c', name: 'Alec' },
        { id: 'a492f148-b51f-498a-9743-d21494c56a9d', name: 'Khalid' },
        { id: '931399df-cf2d-4b65-aa1a-21fa1732d2e7', name: 'Khaldun' },
        { id: 'bcecadde-c282-4911-8044-624a0fa13011', name: 'Jafaar' },
        { id: '3350a4e2-269f-4c21-9f0a-0e7160f9c792', name: 'Asmodeus' },
        { id: '1f37353a-27d3-40e6-848d-8d7c16b42faa', name: 'Vagn' },
        { id: '6983cde6-66e7-4829-8c52-bba989786fbd', name: 'Druid' },
        { id: '8f023474-8970-4f91-bc64-569cadfc5641', name: 'Willow' },
        { id: '611a6807-8bc1-4e5c-9e14-99ae4dee02cf', name: 'Kyriel' },
        { id: 'e2fbe797-0718-4c53-92be-39fc8b74bafd', name: 'Mars' },
        { id: '669ef385-f630-4088-9251-b728da7dc4eb', name: 'Pickett' },
        { id: 'e7499b04-a841-412a-8ae7-33d46cc2ca25', name: 'Gibson' },
        { id: 'cad725fc-3d63-430e-a2c6-25b3963b53a3', name: 'Channler' },
        { id: 'ac36f6ca-6765-4e37-8a38-3c3f24ac27b0', name: 'Sane' },
        { id: '78e6a5bb-2146-4e7e-af45-f57766bd701d', name: 'Anduin' },
        { id: '4a7e778d-4c6f-4842-84dd-75707811ba32', name: 'Remy' },
        { id: '2c2a89d9-a75e-4031-9286-263c0575c5bf', name: 'W.Sanchez' },
        { id: 'f6d8cc57-5651-4365-bee6-c38364741907', name: 'Burton' },
        { id: '41ddbfca-96e0-45dc-83f1-3b852213d46b', name: 'Maskelyne' },
        { id: '3ad32aa3-f7f5-4b8b-aec7-692ac6a956a4', name: 'Ferdinand' },
        { id: '60952c89-3e62-4ae8-aabd-52204de236fd', name: 'Vespucci' },
        { id: '63a2dea0-8a3e-41be-a616-92572f91300f', name: 'Jules' },
        { id: '152441af-cd47-48e4-8a8d-af47c7cf477f', name: 'Boney' },
        { id: 'c9862adc-da16-4e27-bcef-709e14ebb7d1', name: 'Chic' },
        { id: 'd4df3347-23a5-463a-a5d6-3ddd25bd5b30', name: 'Sunshine' },
        { id: 'a2d3b632-36be-4a2d-a1de-c5ef85c14419', name: 'Coco' },
        { id: '4cae7625-f9e6-40f8-930f-3a7401ed2c1a', name: 'Elio' },
        { id: '09ef5582-5549-419c-91f9-e320bcb63dc9', name: 'Ridge' },
        { id: '4bea3186-8049-49ba-8aab-12046421ad5d', name: 'Roeland' },
        { id: 'dd623c7f-fd25-48cd-a19f-c6da219b20e5', name: 'Alexandros' },
        { id: '68335057-4ad7-47e9-ba2f-37e6f0896b82', name: 'Stu' },
        { id: '40610a46-83ad-48ae-8330-a5ed1d87ea46', name: 'Hattori' },
        { id: 'fe1d467a-9f5f-43db-a2dc-3f047480cced', name: 'Shingen' },
        { id: '3c4969e0-3520-4c0b-a470-1a732f58b86e', name: 'Nobunaga' },
        { id: 'b5af10f7-c5a1-401d-a4b3-5a47a986816f', name: 'Gowdy' },
        { id: '03748ee9-b79c-49ba-b0d6-9c681f60fd8f', name: 'Homem' },
        { id: 'db830a83-8310-4f36-8532-106622f64ff1', name: 'D. Luffy' },
        { id: '40564b99-b89a-4dc9-a796-1b4d283f3e40', name: 'Aadya' },
        { id: 'fab6b9fd-6c29-4b36-ae02-67b1d67e3097', name: 'Sumi' },
        { id: '831169ed-f2e5-4f59-ac17-a17beee5f044', name: 'Wendy' },
        { id: 'dacad810-f24a-42c8-a771-de10c818ca8c', name: 'Love' },
        { id: '04951999-d05e-4bec-ba7b-5019c4fada3e', name: 'Wario' },
        { id: '3bb6cdb1-42b3-478e-a04b-f0191fb34fc8', name: 'Wuigi' },
        { id: 'f804fba2-ab2d-4ebd-89a0-092f183003fb', name: 'Drago' },
        { id: 'b436f931-b472-4ea6-8ff1-15958ea3304a', name: 'Hogan' },
        { id: 'f4007310-28e5-4386-95ac-2c2a856bf4f7', name: 'Garrett' },
        { id: 'bc9db80c-d93f-4d33-a892-5c3a2930d8cc', name: 'Hicks' },
        { id: '365c599b-eeab-4426-a88e-e04ce5a6d54d', name: 'Balbo' },
        { id: '876a5add-54bc-4568-bdd8-1c4ffaa7e2cb', name: 'Runi' },
        { id: 'ab4aea23-c3f8-418a-a6a3-6cb56dd94a9b', name: 'Flex' },
        { id: '33e0dbbd-453b-4f42-beb2-d00c9979ce55', name: 'Jemmy' },
        { id: '6f366ff4-73e8-4e73-8285-95e991444b96', name: 'Quispe' },
        { id: '038c4fd5-f8d7-4aef-aad5-576cd3d48f28', name: 'Fud' },
        { id: '11144c3e-2ef6-4f89-8665-d685bbfda141', name: 'Fomo' },
        { id: 'a23e0ff2-715f-4772-acd9-7125514aad87', name: 'Michael' },
        { id: '667ef265-5d6f-44e9-a0b1-1a7d000fd6ae', name: 'Lerner' },
        { id: '5c0924ce-1d71-4181-bc06-546ec7333c0d', name: 'Ernest' },
        { id: 'ec200616-6a5c-4bfe-bb0c-986a802aab0e', name: 'Beer' },
        { id: 'a01959f8-9b88-4443-8848-98eb62e767da', name: 'Chillo' },
        { id: 'f382d357-7398-4355-87c0-100826a7615f', name: 'Cray' },
        { id: 'e1a7fc17-01c9-48d8-a0d1-3c844a2f5574', name: 'Axer' },
        { id: '55e2d66c-f04f-4462-a451-1cb4528ac96e', name: 'Antarc' },
        { id: '6853fe29-9122-47bf-812d-699c6ddbeaf7', name: 'Kane' },
        { id: '324e19ed-873e-4b82-8824-377c4e9ad249', name: 'Yakima' },
        { id: 'f673adcb-34aa-4c38-b129-913b46693335', name: 'Amun' },
        { id: '5e11c8ee-2e19-4e1c-8158-e65d38d435f6', name: 'Kiki' },
        { id: '39be7b9b-aeb8-4081-9f39-eec52b2b6cf8', name: 'Essam' },
        { id: '70fc6e54-fd9b-4327-8371-4c2daa57fe95', name: 'Anwar' },
        { id: '9975790d-a55b-4c4c-949a-8b6046b9def2', name: 'Hypo' },
        { id: '36e70952-ca65-40eb-9fcd-d62c460fd73d', name: 'Fresho' },
        { id: 'a2149856-4f51-4730-a436-943199f1cd87', name: 'Emuli' },
        { id: '8d768968-a70f-4ca2-9d69-1c7f1e67b6e6', name: 'Dan' },
        { id: 'c0f3462e-5f91-41f1-aaad-a0cd708ab00e', name: 'Samu' },
        { id: 'eef9178a-4f06-473d-9b8b-d3be73747159', name: 'Pluton' },
        { id: 'd831b57c-7892-4277-9dc9-6055370036fb', name: 'Piezo' },
        { id: '64bf9a36-18ee-4270-b470-b2e6b029e987', name: 'Cyrix' },
        { id: '4a46dbf5-d0b2-4460-936f-a443e37105cf', name: 'Specialist' },
        { id: '64e56177-3101-4437-a5d6-9ad1c81bd07e', name: 'Witt' },
        { id: 'c6a4ce23-9490-4a46-b940-19eecda1a14b', name: 'General' },
        { id: '0e0f7623-6a49-4c63-8156-60f5b0caa5b6', name: 'Lieutenant' },
        { id: '5db0e4e4-ab13-4713-a187-422de6400560', name: 'Desmond' },
        { id: '18cb46bb-2d3d-42ee-b651-4687644138bf', name: 'Challen' },
        { id: 'bf4877bb-2f60-4910-baad-26929c513f36', name: 'Horatio' },
        { id: '124e8d67-42bb-45c7-b9a9-f2aaddc27b3d', name: 'Santa' },
        { id: '60d5417e-2208-48e5-b51f-22c4f76ba0dc', name: 'Clyde' },
        { id: 'f8e9346d-7bd0-4e1e-b582-128802678542', name: 'Hoodoo' },
        { id: 'fb646264-061b-458c-98af-fc3f74169e7f', name: 'Felipe' },
        { id: '9d72bfa4-1831-4ff3-9aca-1633f30276fc', name: 'Colonel' },
        { id: '031c536d-99ba-4bf2-ab22-9dcfc7c7192f', name: 'Willy' },
        { id: 'aa00c22e-dd7a-4abb-b6d0-82305a0da8ea', name: 'Sir Walter' },
        { id: '7fdc02d7-7d37-435e-9c1b-f2bca652a58e', name: 'Christopher' },
        { id: 'aed8db3b-3db8-4d06-b779-9b3429f4137d', name: 'Millwall' },
        { id: '154e8fbb-e6a7-4876-a1fa-2bb1474075e8', name: 'Reed' },
        { id: 'ca3102fe-cd4d-4a06-97b6-3f37507a4c3b', name: 'Seeri' },
        { id: 'b84f2eb2-73d7-4b37-9d25-9ef19d6ff7df', name: 'Dolu' },
        { id: 'd6cfab95-e4ab-4af0-b683-da900c6ee336', name: 'Ahoy' },
        { id: '9178874d-b639-44ad-acd0-852c15989d55', name: 'Wotter' },
        { id: 'ecaf1a5a-91e8-4999-8248-51d809fadc3e', name: 'Censored' },
        { id: 'e7729928-3659-4f38-8345-014e88830e48', name: 'Shelby' },
        { id: '74795c4b-859e-4a83-b72e-4af705c70d6e', name: 'Jason' },
        { id: 'a5214038-5310-4806-9783-210b21713bb3', name: 'Jason' },
        { id: 'dfe2f308-bd22-4936-aa07-d3ab47903234', name: 'Detta' },
        { id: '8972bb60-f9ce-4859-b7a5-10f34f48fd91', name: 'Goku' },
        { id: '40a9d0e0-b0db-451b-bd30-022f35317c87', name: 'Hagen' },
        { id: '4821dd09-9b0f-4836-9239-cd8ef4b6d9b7', name: 'Rodrigo' },
        { id: 'bbf52b4b-735e-4702-93fb-05b72347dfe0', name: 'Richard' },
        { id: '0bafdb25-f5f6-46c4-b997-d0d1a5a0d34a', name: 'Galahad' },
        { id: '91223d64-96cd-44f1-ad54-f1e991e63992', name: 'Siegfried' },
        { id: '7ac12c7f-af76-41b1-8f5e-3e3942633952', name: 'Angelo' },
        { id: '5c1fb52e-4a8e-4e9f-a855-4c1934380dba', name: 'Crew' },
        { id: '105c6f62-6016-4bfb-92e1-b91878014345', name: 'Amani' },
        { id: 'f85c13da-7318-430e-8ad1-24131d44ec18', name: 'Sweeper' },
        { id: '03b2502b-1e47-45b8-a413-40c8a8325464', name: 'Lars' },
        { id: '26df6e1a-f1bb-4f71-8afd-8a257d263d38', name: 'Wagey' },
        { id: '3a083385-3fd8-4010-ad8a-2cf4be0eb3e6', name: 'Cerion' },
        { id: 'a06288b6-a084-4f43-ab54-f94530226249', name: 'Aeron' },
        { id: '3ec9688b-74c8-446b-8ae7-22cdc31be36c', name: 'Aeneas' },
        { id: 'e2bd4698-e1b9-4e9b-bbaf-737fb5fc0fd5', name: 'Abihu' },
        { id: '45ce8195-78b4-4d78-b576-6fdc05be9ceb', name: 'Urban' },
        { id: 'f669d1f3-b537-497d-960b-a48c11b9ea9b', name: 'Vittorio' },
        { id: 'ba81d5f0-b8d4-4175-80ae-955e95f2aecb', name: 'Hoshea' },
        { id: 'b745018b-72d5-42f2-9e72-e432f65e507c', name: 'Boris' },
        { id: '401ed1ca-04b4-457e-b949-86ced75f45e2', name: 'Shaggy' },
        { id: '5b36398f-e92a-4a2b-9fc0-3f4a0ca0f7f1', name: 'Trejo' },
        { id: '2124502c-c92a-4973-895b-81b114885168', name: 'Hopkins' },
        { id: 'b710fa17-0d41-4aa8-8af7-dd68c5bea41d', name: 'Copping' },
        { id: 'e4fd1c17-2067-4dcd-9d9c-84b488f63926', name: 'Woody' },
        { id: '216d4bec-8691-4809-a3ff-21dab1fede59', name: 'Daryl' },
        { id: 'c7d9189e-36e2-4606-9891-8889802016ba', name: 'Stuart' },
        { id: '58b981ee-3a9f-4632-bde8-5a053e7ba657', name: 'X' },
        { id: '3d478728-36e1-4b5d-ab54-b943a9e8b1b7', name: 'Kevin' },
        { id: 'a715288b-ee30-441f-b13a-9fe2320f82fc', name: 'Cole' },
        { id: '0588b18c-7694-45a2-8292-2136783ad817', name: 'Madson' },
        { id: 'bccf536c-a034-48a0-837d-50c26c546392', name: 'Mad Hatter' },
        { id: 'e1922484-87c0-45fc-bd1c-aba3cae76fef', name: 'Pengu' },
        { id: '192f0215-a15c-4f26-b3c2-257020765db1', name: 'Rodney' },
        { id: '4dc20b3e-65ea-4fa4-8333-e87304b1da57', name: 'Mr. Wayne' },
        { id: '71c43ac9-6c18-4c92-b5b3-fdab89821499', name: 'Dave' },
        { id: '48d05cd6-d4ee-408f-abb3-6f6017f21f22', name: 'Sambo' },
        { id: 'b8d1806f-8844-40f8-a2bc-09d5aca6f674', name: 'Rene' },
        { id: 'b0629c10-1eb9-4abf-b2cf-a19fdc3bb752', name: 'Emily' },
        { id: 'd1c19e20-79f6-4824-8724-a4a3dd73060b', name: 'Han' },
        { id: 'ea3cfc72-54f7-4c87-95c0-53ca95672736', name: 'Leonidas' },
        { id: 'e2819b4e-1671-49fb-a4b5-21937f59fa7a', name: 'Bathory' },
        { id: 'db3d5a12-5774-4516-a2cf-714ef42bccf9', name: 'Baobhan' },
        { id: 'a8c1d34d-c324-4317-807f-696e6979fa42', name: 'Bishop' },
        { id: '18d425cd-857b-4921-a9e9-9180a0305450', name: 'Armitage' },
        { id: '79f88fbe-1820-4686-8f46-f564d6f5cf5d', name: 'Jocke' },
        { id: 'def5b024-8fa6-4713-8625-06a5fda0c7c9', name: 'Blackbeard' },
        { id: '12fd9d08-c2be-462f-8065-dd7f95f18976', name: 'Svente' },
        { id: '81e59f1c-b274-4c2f-97c5-5a9c6b91aa03', name: 'John Silver' },
        { id: '1ed3b2b8-5f64-46f9-93d0-20e90e40b63c', name: 'Raphael' },
        { id: '68d0108b-65bd-4df1-86d3-dcdb4f6fb8c4', name: 'Mayor' },
        { id: 'f31f02ba-b389-42bd-af45-d244749f1127', name: 'Moteman' },
        { id: 'ba381005-1686-4abe-9b33-dedae6f13e1a', name: 'Flint' },
        { id: 'fe5d69b1-7a62-4b12-9b5f-43b61953e104', name: 'Eurotas' },
        { id: 'a2f7d781-dd24-4d92-ab1d-b90b4935144e', name: 'Guy' },
        { id: 'ce1e107b-77dc-4900-806f-009d2809b183', name: 'Edward' },
        { id: 'ea83d703-5178-41a0-93d2-14fd6aa549d1', name: 'Hippokrates' },
        { id: '7aa913fb-78f6-47a6-9412-c4e4d07ae5f4', name: 'Alois' },
        { id: '33ef8d52-f58f-442c-bd9b-b785219d5996', name: 'Wookzmi' },
        { id: '10ecbc25-5850-49fe-a2ca-a75654f90e13', name: 'Beelzebub' },
        { id: 'b4df809f-294e-43be-9d38-4aaefa7d790f', name: 'Lockhead' },
        { id: 'bfaef6f7-a3d4-45e8-94fc-de3795e3b0e0', name: 'Sinister' },
        { id: '0db13769-3156-488a-8633-bff7b19df12c', name: 'Nyx King of the Nights' },
        { id: '4c536d70-6fea-439f-b187-f8103c5c2d83', name: 'Nyx King of the Nights' },
        { id: '4ea24dd7-a5cd-4e38-83ed-ff5786a307cc', name: 'Chrome King ot the TIme' },
        // Wookz #333 - uses default-wookz.mp4
    ];
    
    // Generate Gen 0 (33 videos) - 001-033
    for (let i = 1; i <= 33; i++) {
        const serial = i.toString().padStart(3, '0');
        const characterData = gen0Data[i - 1];
        const videoId = characterData ? characterData.id : `placeholder-gen0-${i}`;
        const characterName = characterData ? characterData.name : `Wookz #${serial}`;
        
        wookzData.push({
            id: i,
            serial: serial,
            name: `${characterName} #${serial}`,
            generation: 'gen0',
            description: `${characterName} #${serial}`,
            video: `${cdnBaseUrl}/${videoId}/play_720p.mp4`,
            thumbnail: `${cdnBaseUrl}/${videoId}/thumbnail.jpg`,
            rarity: getRarityForSerial(i, 'gen0'),
            isDefault: false
        });
    }
    
    // Generate Gen 1 (333 videos) - 001-333
    for (let i = 1; i <= 333; i++) {
        const serial = i.toString().padStart(3, '0');
        
        // Special handling for Wookz #333 (default-wookz.mp4)
        if (i === 333) {
            wookzData.push({
                id: i + 33, // Offset by 33 to avoid ID conflicts
                serial: serial,
                name: `Wookz #${serial}`,
                generation: 'gen1',
                description: `Wookz #${serial}`,
                video: 'assets/images/default-wookz.mp4',
                thumbnail: 'assets/images/default-wookz.mp4',
                rarity: getRarityForSerial(i, 'gen1'),
            isDefault: true
            });
        } else {
            const characterData = gen1Data[i - 1];
            const videoId = characterData ? characterData.id : `placeholder-gen1-${i}`;
            
            wookzData.push({
                id: i + 33, // Offset by 33 to avoid ID conflicts
                serial: serial,
                name: `Wookz #${serial}`,
                generation: 'gen1',
                description: `Wookz #${serial}`,
                video: `${cdnBaseUrl}/${videoId}/play_720p.mp4`,
                thumbnail: `${cdnBaseUrl}/${videoId}/thumbnail.jpg`,
                rarity: getRarityForSerial(i, 'gen1'),
                isDefault: false
            });
        }
    }
    
    return wookzData;
}

// Determine rarity based on serial number and generation
function getRarityForSerial(serial, generation) {
    if (generation === 'gen0') {
        // Gen 0 rarities (adjust as needed)
        if (serial <= 5) return 'Legendary';
        if (serial <= 15) return 'Epic';
        if (serial <= 25) return 'Rare';
        return 'Common';
    } else {
        // Gen 1 rarities (adjust as needed)
        if (serial % 50 === 0) return 'Epic';
        if (serial % 20 === 0) return 'Rare';
        return 'Common';
    }
}

// Gallery functionality
function initGallery() {
    // Generate Wookz data for all 333 videos using CDN links
    const wookzData = generateWookzData();
    
    // Store data globally for search
    window.wookzData = wookzData;
    window.currentFilter = 'all';
    
    // Show default Wookz on page load
    displayWookz(wookzData[0]);
}

function filterGallery() {
    const filterSelect = document.getElementById('galleryFilter');
    const searchInput = document.getElementById('gallerySearch');
    
    window.currentFilter = filterSelect.value;
    searchInput.value = ''; // Clear search when changing filter
    
    // Show default Wookz when filtering
    displayWookz(window.wookzData[0]);
}

function searchGallery() {
    const searchInput = document.getElementById('gallerySearch');
    const searchTerm = searchInput.value.trim();
    
    if (!searchTerm) {
        // Show default Wookz #001 from Gen 0 when no search term
        displayWookz(window.wookzData[0]);
        return;
    }
    
    // Filter by generation first
    let filteredData = window.wookzData;
    if (window.currentFilter !== 'all') {
        filteredData = window.wookzData.filter(wookz => wookz.generation === window.currentFilter);
    }
    
    // Then filter by search term
    const searchResults = filteredData.filter(wookz => 
        wookz.serial.includes(searchTerm) || 
        wookz.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (searchResults.length > 0) {
        displayWookz(searchResults[0]); // Show first result
    } else {
        showNoResults();
    }
}

function displayWookz(wookz) {
    const mainFrame = document.getElementById('galleryMainFrame');
    
    // Check if it's a video or image
    const isVideo = wookz.video && wookz.video.endsWith('.mp4');
    
    if (isVideo) {
        mainFrame.innerHTML = `
            <div class="gallery__wookz-display">
                <video class="gallery__wookz-video" poster="${wookz.thumbnail || wookz.image}" muted loop autoplay>
                    <source src="${wookz.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="gallery__wookz-overlay">
                    <div class="gallery__play-btn">⏸</div>
                </div>
                <div class="gallery__wookz-info">
                    <h3 class="gallery__wookz-name">${wookz.name}</h3>
                </div>
            </div>
        `;
        
        // Add video play functionality
        const video = mainFrame.querySelector('.gallery__wookz-video');
        const playBtn = mainFrame.querySelector('.gallery__play-btn');
        
        playBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playBtn.textContent = '⏸';
            } else {
                video.pause();
                playBtn.textContent = '▶';
            }
        });
        
        video.addEventListener('ended', () => {
            playBtn.textContent = '▶';
        });
        
        // Add error handling for video loading
        video.addEventListener('error', () => {
            console.warn(`Video failed to load: ${wookz.video}`);
            // Fallback to thumbnail image
            mainFrame.innerHTML = `
                <div class="gallery__wookz-display">
                    <img class="gallery__wookz-image" src="${wookz.thumbnail || wookz.image}" alt="${wookz.name}">
                    <div class="gallery__wookz-info">
                        <h3 class="gallery__wookz-name">${wookz.name}</h3>
                        <p class="gallery__wookz-description">${wookz.description}</p>
                    </div>
                </div>
            `;
        });
    } else {
        // Display as image
        mainFrame.innerHTML = `
            <div class="gallery__wookz-display">
                <img class="gallery__wookz-image" src="${wookz.image || wookz.video}" alt="${wookz.name}">
                <div class="gallery__wookz-info">
                    <h3 class="gallery__wookz-name">${wookz.name}</h3>
                </div>
            </div>
        `;
    }
}

function showPlaceholder() {
    const mainFrame = document.getElementById('galleryMainFrame');
    mainFrame.innerHTML = `
        <div class="gallery__placeholder">
            <p>Select a collection and search for a Wookz to view</p>
        </div>
    `;
}

function showNoResults() {
    const mainFrame = document.getElementById('galleryMainFrame');
    mainFrame.innerHTML = `
        <div class="gallery__placeholder">
            <p>No Wookz found with that serial number</p>
        </div>
    `;
}

function createNFTCard(nft) {
    const card = document.createElement('div');
    card.className = 'nft-card';
    card.innerHTML = `
        <div class="nft-card__image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">
            🎨
        </div>
        <div class="nft-card__content">
            <div class="nft-card__badge">${nft.rarity}</div>
            <h3 class="nft-card__title">${nft.name}</h3>
            <p class="nft-card__description">${nft.description}</p>
            <div class="nft-card__price">${nft.price}</div>
        </div>
    `;
    
    // Add click event for NFT details
    card.addEventListener('click', () => showNFTModal(nft));
    
    return card;
}

function showNFTModal(nft) {
    // Create modal if it doesn't exist
    let modal = document.querySelector('.modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'modal';
        document.body.appendChild(modal);
    }
    
    modal.innerHTML = `
        <div class="modal__content">
            <button class="modal__close">&times;</button>
            <h2>${nft.name}</h2>
            <div class="nft-card__image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 4rem; margin: 1rem 0;">
                🎨
            </div>
            <p><strong>Rarity:</strong> ${nft.rarity}</p>
            <p><strong>Price:</strong> ${nft.price}</p>
            <p><strong>Description:</strong> ${nft.description}</p>
            <div style="margin-top: 2rem;">
                <button class="btn btn--primary" onclick="buyNFT(${nft.id})">Buy Now</button>
                <button class="btn btn--outline" onclick="closeModal()">Close</button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    
    // Close modal events
    modal.querySelector('.modal__close').addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function buyNFT(nftId) {
    closeModal();
}


// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check wallet connection on page load (cosmetic only)
window.addEventListener('load', function() {
    const isConnected = localStorage.getItem('walletConnected');
    const walletAddress = localStorage.getItem('walletAddress');
    
    if (isConnected === 'true' && walletAddress) {
        connectWalletBtn.textContent = walletAddress;
        connectWalletBtn.classList.add('connected');
    }
});

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
}, 250));

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    showNotification('An error occurred. Please refresh the page.', 'error');
});

// Export functions for global access
window.buyNFT = buyNFT;
window.closeModal = closeModal;

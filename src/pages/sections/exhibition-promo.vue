<template>
    <section class="bg-dark text-light pt-5 pb-4">
        <b-container>
            <h5 class="main-title">
                UPCOMING EXHIBITION
            </h5>
            <b-row align-v="start" align-h="center">
                <b-col class="text-center">
                    <b-img class="exhibition-image" :src="require('../../assets/images/exhibitions/poetic_love_part_2.jpg')"
                        fluid alt="Exhibition poster" />
                </b-col>
                <b-col class="text-center mt-5 mt-sm-0" cols="12" sm="6">
                    <h6 class="text-uppercase mb-3">
                        Poetic Love Under Beats & Paintings Phase II
                    </h6>
                    <h6 class="font-weight-lighter small">My upcoming solo exhibition curated by
                        <a href="https://rw.linkedin.com/in/kakizi-jemima-648bbb110" target="_blank">KAKIZI Jemima</a>
                    </h6>
                    <div class="dotted-border my-4"></div>
                    <h6 class="font-weight-lighter small mb-3">
                        <span class="text-primary">Opening day:</span>
                        &nbsp;
                        <span>19th August 2023 &ensp; <span class="text-nowrap">10am - 4pm</span></span>
                    </h6>
                    <h6 class="font-weight-lighter small ">
                        <span class="text-primary">Closing day:</span>
                        &nbsp;
                        <span>2nd September 2023</span>
                    </h6>
                    <div class="dotted-border my-4"></div>
                    <h6 class="font-weight-lighter small mb-3">
                        <span class="text-primary">Venue:</span>
                        &nbsp;
                        <span>Inshuti Art Gallery <span class="text-nowrap">(KG 549 st, Kacyiru)</span></span>
                    </h6>
                    <h6 class="font-weight-lighter small">
                        <span class="text-primary">
                            <a href="https://goo.gl/maps/C5MrAzDovb4UxxXU8" target="_blank">Get Map Directions</a>
                        </span>
                    </h6>
                    <div class="dotted-border my-4"></div>
                    <h6 class="font-weight-lighter small text-center">For more information contact:</h6>
                    <h6 class="font-weight-lighter small text-center">
                        <a :href="'tel:' + personalInfo.phone.number">
                            {{ personalInfo.phone.label }}
                        </a>
                    </h6>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        personalInfo() {
            return require("../../../info").default.personal;
        },
    },
};  
</script>

<style>
.exhibition-image {
    height: 100%;
    max-height: 600px;
    object-fit: contain;
}
</style>
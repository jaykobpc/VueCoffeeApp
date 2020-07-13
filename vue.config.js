module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/scss/_variables.scss";
                    @import "@/assets/scss/_mixins.scss";
                `
            }
        }
    },
    publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
};
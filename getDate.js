var ProductDetails = {

    GetUploadedDate: (function(ela, elb, elc) {
        //Local vars
        var uploadedDate = new Date(ela, elb, elc);

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        //var uploadMonth = uploadedDate.getMonth();


        var fileDay = function() {
            return uploadedDate.getDate();
        };

        var fileMonth = function() {
            return uploadedDate.getMonth() + 1;
        };

        var fileYear = function() {
            return uploadedDate.getFullYear();
        };

        var getShortMonthName = function(monLength) {
            var monthUploaded = months[uploadMonth];
            var monthLength = monLength || 3;
            return monthUploaded.slice(0, monthLength);
        };

        return {
            getDay: fileDay,
            getMonth: fileMonth,
            getYear: fileYear
        };

    })

};
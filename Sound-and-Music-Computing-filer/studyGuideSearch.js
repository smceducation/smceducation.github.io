$(document).ready(function() {

    var studyGuideSearchForm = $('#studyGuideSearchForm');
    
    var init = function() {
        prepareFormFromParameters();
    }

    $(studyGuideSearchForm).submit(function(){
        /*
        * Taking the input from the form and adding it to the url parameters
        */
        var formAction = $(this).attr("action"),
            newUrl = "";

        var subjects = $(this).find("input[name='subjects']:checked"),
            cities   = $(this).find("input[name='city']:checked"),
            programme   = $(this).find("input[name='programme']:checked"),
            isEnglish   = $(this).find("input[name='language']:checked");

        if(subjects.length > 0) {
            newUrl = "subjects="
            $(subjects).each(function() {
                newUrl = updateUrl(newUrl, $(this).val());
            });
            
        }

        if(cities.length > 0) {
            if(newUrl.slice(newUrl.length-1, newUrl.length) == ",") {
                newUrl = newUrl.slice(0, newUrl.length-1) + "&cities=";
            } else {
                newUrl = newUrl + "cities=";
            }
            $(cities).each(function() {
                newUrl = updateUrl(newUrl, $(this).val());
            });
        }

        if(programme.length > 0) {
            if(newUrl.slice(newUrl.length-1, newUrl.length) == ",") {
                newUrl = newUrl.slice(0, newUrl.length-1) + "&programmes=";
            } else {
                newUrl = newUrl + "programmes=";
            }
            $(programme).each(function() {
                newUrl = updateUrl(newUrl, $(this).val());
            });
        }

        if(isEnglish.length > 0) {
            if(newUrl.slice(newUrl.length-1, newUrl.length) == ",") {
                newUrl = newUrl.slice(0, newUrl.length-1) + "&language=";
            } else {
                newUrl = newUrl + "language=";
            }
            $(isEnglish).each(function() {
                newUrl = updateUrl(newUrl, $(this).val());
            });
        }
        
        if(newUrl.slice(newUrl.length-1, newUrl.length) == ",") {
            newUrl = newUrl.slice(0, -1);
        }

        formAction = (formAction.indexOf("?") !== -1) ? formAction + "&" + newUrl : formAction + "?" + newUrl;
        $(this).attr("action", formAction);
        return true;
    });

    var prepareFormFromParameters = function() {
        
        var subjects = getUrlParameter("subjects"),
            cities   = getUrlParameter("cities"),
            programmes = getUrlParameter("programmes"),
            isEnglish = getUrlParameter("language");

        if(subjects !== undefined) {
            $.each(subjects.split(","), function(data) {
                var data = this;
                setCheckBoxChecked(data);
            });
        }
        if(cities !== undefined) {
            $.each(cities.split(","), function() {
                var data = this;
                setCheckBoxChecked(data);
            });
        }
        if(programmes != undefined) {
            $.each(programmes.split(","), function() {
                var data = this;
                setCheckBoxChecked(data);
            });
        }
        if(isEnglish != undefined) {
            $.each(isEnglish.split(","), function() {
                var data = this;
                setCheckBoxChecked(data);
            });
        }

    };

    var setCheckBoxChecked = function(data) {
        var input = $("input[value='"+data+"']");
        $(input).prop("checked", true);
    };

    //getUrlParameter('technology');
    var getUrlParameter = function(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
    
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
    
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    var updateUrl = function(url, value) {
        url = url + value + ",";
        return url;
    };

    init();
});
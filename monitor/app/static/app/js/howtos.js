// Since we don't set a beacon_url, we'll just subscribe to the before_beacon function
// and print the results into the browser itself.
BOOMR.subscribe('before_beacon', function(o) {
	var html = "", t_name, t_other, others = [];
    var json = {};

	if(!o.t_other) o.t_other = "";

	for(var k in o) {
		if(!k.match(/^(t_done|t_other|bw|lat|bw_err|lat_err|u|r2?)$/)) {
			if(k.match(/^t_/)) {
				o.t_other += "," + k + "|" + o[k];
			}
			else {
				others.push(k + " = " + o[k]);
			}
		}
	}

    if (o.t_done) {
        json.t_done = o.t_done;
    }
	if(o.t_other) {
		t_other = o.t_other.replace(/^,/, '').replace(/\|/g, ' = ').split(',');
		for(var i=0; i<t_other.length; i++) {
		}
	}
    if (o.bw) {
        json.bw = o.bw;
        json.bw_err = o.bw_err;
    }
    if (o.lat) {
        json.lat = o.lat;
        json.lat_err = o.lat_err;
    }

	var r = document.getElementById('results');

    for(var k in o) {
        json[k] = o[k];
    }

    if(others.length) {

		for(var i=0; i<others.length; i++) {
			var t = document.createTextNode(others[i]);
		}
	}

    json['user_agent'] = navigator.userAgent;

    jQuery.ajax(
        {
            url: "http://179.0.156.22/post/",
            type: "POST",
            data: json,
            crossDomain: true
        }
    );
});
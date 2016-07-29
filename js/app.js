var app = (function() {
	
	var students = [];
	
	function Student(avatar, name, email, joinDate) {
		
		this.avatar = avatar;
		this.name = name;
		this.email = email;
		this.joinDate = joinDate;
		
	}
	
	return {
		
		init: function() {
			
			this.getStudents();
			this.createStudentItem(this.searchStudents("ph")[0]);
			
		},
		
		getStudents: function() {
			
			var student, name, avatar, email, joinDate;
			var studentList = document.getElementsByClassName("student-list")[0].children;
			for (var i = 0; i < studentList.length; i++) {
				avatar = studentList[i].children[0].children[0].src;
				name = studentList[i].children[0].children[1].innerHTML;
				email = studentList[i].children[0].children[2].innerHTML;
				joinDate = studentList[i].children[1].children[0].innerHTML;
				student = new Student(avatar, name, email, joinDate);
				students.push(student);
			}
			
		},
		
		searchStudents: function(input) {
			
			var patt = new RegExp(input, "g")
			
			var filtered = students.filter(function(student) {
				if (patt.test(student.name) || patt.test(student.email)) {
					return student;
				}
			});
			
			for (var i = 0; i < filtered.length; i++) {
				console.log(filtered[i]);
			}
			
			return filtered;
		},
		
		createStudentItem: function(student) {
			var studentItem = document.createElement("li");
			var studentDetails = document.createElement("div");
			var img = document.createElement("img");
			var name = document.createElement("h3");
			var email = document.createElement("span");
			var joined = document.createElement("div");
			var date = document.createElement("span");
			studentItem.className = "student-item cf";
			studentDetails.className = "student-details";
			img.className = "avatar";
			img.src = student.avatar;
			name.innerHTML = student.name;
			email.className = "email";
			email.innerHTML = student.email;
			joined.className = "joined-details";
			date.className = "date";
			date.innerHTML = student.joinDate;
			studentDetails.appendChild(img);
			studentDetails.appendChild(name);
			studentDetails.appendChild(email);
			studentItem.appendChild(studentDetails);
			joined.appendChild(date);
			studentItem.appendChild(joined);
			console.log(studentItem);
		}
	}
}());

app.init();
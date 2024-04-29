    // Sample list of ebook titles
    const ebooks = [
        {
            id: 1,
            title: "A Brief History of Time",
            author: "Stephen Hawking",
            genre: "Non-fiction",
            price: 14.99,
            rating: 4.9
        },
        {
            id: 2,
            title: "Harry Potter and the Deathly Hallows",
            author: "J.K. Rowling",
            genre: "Fantasy",
            price: 12.99,
            rating: 4.7
        },
        {
            id: 3,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: "Fiction",
            price: 7.99,
            rating: 4.2
        },
        {
            id: 4,
            title: "Hunger Games: Catching Fire",
            author: "Suzanne Collins",
            genre: "Dystopian",
            price: 11.99,
            rating: 4.5
        },
        {
            id: 5,
            title: "Vampirates",
            author: "Justin Somper",
            genre: "Fantasy",
            price: 5.99,
            rating: 5.0
        },
        {
            id: 6,
            title: "The Lost Symbol",
            author: "Dan Brown",
            genre: "Mystery",
            price: 12.99,
            rating: 3.9
        },
        {
            id: 7,
            title: "Horror Unmasked",
            author: "Brad Weismann",
            genre: "Horror",
            price: 20.99,
            rating: 3.7
        },
        {
            id: 8,
            title: "Divergent",
            author: "Veronica Roth",
            genre: "Dystopian",
            price: 12.99,
            rating: 4.7
        },
        {
            id: 9,
            title: "The Maze Runner",
            author: "James Dashner",
            genre: "Dystopian",
            price: 11.99,
            rating: 4.3
        },
        {
            id: 10,
            title: "Legend",
            author: "Marie Lu",
            genre: "Dystopian",
            price: 17.99,
            rating: 4.3
        },
        {
            id: 11,
            title: "The Da Vinci Code",
            author: "Dan Brown",
            genre: "Mystery",
            price: 14.99,
            rating: 4.7
        },
        {
            id: 12,
            title: "City of Bones",
            author: "Cassandra Clare",
            genre: "Fantasy",
            price: 7.99,
            rating: 4.2
        },
        {
            id: 13,
            title: "The Giver",
            author: "Lois Lowry",
            genre: "Dystopian",
            price: 11.99,
            rating: 4.3
        },
        {
            id: 14,
            title: "The Host",
            author: "Stephenie Meyer",
            genre: "Science Fiction",
            price: 19.99,
            rating: 4.2
        },
        {
            id: 15,
            title: "Ender's Game",
            author: "Orson Scott Card",
            genre: "Science Fiction",
            price: 12.99,
            rating: 3.7
        },
        {
            id: 16,
            title: "Uglies",
            author: "Scott Westerfeld",
            genre: "Science Fiction",
            price: 4.99,
            rating: 4.1
        },
        {
            id: 17,
            title: "The Selection",
            author: "Kiera Cass",
            genre: "Fantasy",
            price: 8.99,
            rating: 4.3
        },
        {
            id: 18,
            title: "Red Queen",
            author: "Victoria Aveyard",
            genre: "Fantasy",
            price: 4.99,
            rating: 4.1
        },
        {
            id: 19,
            title: "Delirium",
            author: "Lauren Oliver",
            genre: "Dystopian",
            price: 19.99,
            rating: 4.8
        },
        {
            id: 20,
            title: "The 5th Wave",
            author: "Rick Yancey",
            genre: "Science Fiction",
            price: 14.99,
            rating: 4.9
        }
    ];
    
    // Function to search for similar ebook titles
    function searchEbooks(query) {
        query = query.toLowerCase(); // Convert query to lowercase for case-insensitive search
        ebooks.forEach(ebook => {
            // Check if the title or author contains the query string
            if (ebook.title.toLowerCase().includes(query) || ebook.author.toLowerCase().includes(query)) {
                document.getElementById(ebook.id).style.display = ""; // Show the ebook
            } else {
                document.getElementById(ebook.id).style.display = "none"; // Hide the ebook
            }
        });
    }

    function genreSelect(genre) {
        ebooks.forEach(ebook => {
            let ebookId = document.getElementById(ebook.id);
            if (ebookId) {
                if (genre === ebook.genre) {
                    ebookId.style.display = ""; // Show the ebook
                } else {
                    ebookId.style.display = "none"; // Hide the ebook
                }
            }
        });
    }

    function addedToCart(element) {
        let bookId = $(element).parent().parent().attr('id');
        addedItemIds += bookId + ' ';
        let idArray = addedItemIds.split(' ').map(function(num) {
            return parseInt(num);
        });

        // store added items in local storage 
        let addedItems = JSON.parse(localStorage.getItem('addedItems')) || [];
        addedItems.push(bookId);
        localStorage.setItem('addedItems', JSON.stringify(addedItems));
    }

    function yourBooksLoaded() {
        let addedItems = JSON.parse(localStorage.getItem('addedItems')) || [];
        let items = 0;
        let amount = 0;
        let gst = 0;
        let finalPrice = 0;
        addedItems.forEach(id => {
            let itemData = 
            `<div class="itemContainer">
            <div class="item">
            <img src="images/bookCovers/${id}.jpg" alt="${id-1}.jpg" class="itemImg">
            <div class="bookTitle">${ebooks[id-1].author}</div>
            </div>
            <div class="itemDesc">
            <div class="grid-container">
                <div>Item Name:</div>
                <div id="itemName" class="grid-item">${ebooks[id-1].title}</div>
                <div>Price:</div>
                <div id="itemPrice" class="grid-item">$${ebooks[id-1].price}</div>
                <div>Rating:</div>
                <div id="itemRating" class="grid-item">${ebooks[id-1].rating}<i class="fa-solid fa-star"></i></div>
                <div>Quantity:</div>
                <div id="itemQty" class="grid-item">
                <i class="fa-solid fa-minus" class="itemQtyMinus" onclick="qtyMinus(this)"></i>
                <span class="currQty">1</span>
                <i class="fa-solid fa-plus" class="itemQtyMinus" onclick="qtyPlus(this)"></i>
                </div>
                <div class="removeItem"><i class="fa-solid fa-trash-can"></i> Remove</div>
            </div>
            </div>
        </div>`
            $("#addedItems").append(itemData);
            items += 1;
            amount += ebooks[id-1].price;
        })
        calcBill();

        // reset function
        $('#resetBtn').click(function() {
            localStorage.removeItem('addedItems');
            $("#addedItems").html(`<div class="noItems">
            Oops! Your cart is empty. 
            </div>`);
            $("#order-totalItems").html(0);
            $("#order-amount").html('$'+0);
            $("#order-gst").html('$'+0);
            $("#order-finalPrice").html('$'+0);
        });
        
        $('.removeItem').click(function() {
            let par = $(this).parent().parent().parent(); // fetches '.itemContainer'
            let bookId = parseInt(par.find('.itemImg').attr('alt')) + 1; // jugaad to find element ID
             
            // Remove item from local storage
            let addedItems = JSON.parse(localStorage.getItem('addedItems')) || [];
            let updatedItems = addedItems.filter(id => parseInt(id) !== bookId); // Convert id to integer for comparison
            localStorage.setItem('addedItems', JSON.stringify(updatedItems));
        
            // Remove item from display
            $(par).slideUp('slow', function() {
                $(this).remove();
                calcBill();
            });
        });

        // if local storage empty then:
        let i = localStorage.getItem('addedItems');
        if (!i || i.length === 0) {
            $("#addedItems").html(`<div class="noItems">
            Oops! Your cart is empty. 
            </div>`);
        }
    }

    function qtyPlus(element) {
        let par = $(element).parent();
        let q = par.children(".currQty");
        let val = $(q).text();
        // console.log((val)+1);
        $(q).html(parseInt(val)+1);
        calcBill();
    }

    function qtyMinus(element) {
        let par = $(element).parent();
        let q = par.children(".currQty");
        let val = $(q).text();
        // console.log((val)+1);
        if (val > 1) {
            $(q).html(parseInt(val)-1);
        }
        // else {
        //     $(par).parent().parent().parent().remove();
        // }
        calcBill();
    }
    
    function calcBill() {
        let items = 0;
        let amt = 0;
        let gst = 0;
        var netAmt = 0;
        $('.itemContainer').each(function() {
            let quantity = parseInt($(this).find('.currQty').text());
            let price = parseFloat($(this).find('#itemPrice').text().substring(1)); // Remove $ sign and parse price
            items += quantity;
            amt += price * quantity;
        })
        // calculation
        gst = amt*0.18;
        netAmt = amt + gst;
        amt = parseFloat(amt.toFixed(2));
        gst = parseFloat(gst.toFixed(2));
        netAmt = parseFloat(netAmt.toFixed(2));

        // displaying
        $("#order-totalItems").html(items);
        $("#order-amount").html('$'+amt);
        $("#order-gst").html('$'+gst);
        $("#order-finalPrice").html('$'+netAmt);
    }

    function validate() {
        // REGISTRATION PAGE
        // PHONE NUMBER FIELD
        let pNum = document.getElementById('phNo').value.toString();
        // must be numbers only
        if (!/^[0-9]+$/.test(pNum)) {
            alert('Phone number cannot have letters.');
            return false;
        }
        // must have 10 digs
        if (pNum.length !== 10) {
            alert('Phone number must have exactly 10 digits');
            return false;
        } 

        // PASSWORD VALIDATION
        let setPass = document.getElementById('setPassword').value;
        let confPass = document.getElementById('confPassword').value;
        if (setPass.length < 5) {
            alert('Password must have minimum 5 characters');
            return false;
        }
        if (setPass !== confPass) {
            alert('Passwords do not match.');
            return false;
        }

        return true;
    }

    function validate1() {
        // LOGIN PAGE
        let pass = document.getElementById('PasswordLogin').value;
        if (pass.length < 5) {
            alert('Password must have minimum 5 characters');
            return false;
        }
        return true;
    }

    function registerUser() {   
        let username = document.getElementById("Username").value;
        let pass = document.getElementById("confPassword").value;
        localStorage.setItem(username, pass);
        localStorage.setItem("currUser", username);
        return true;
    }

    function verifyUser() {
        let uName = document.getElementById("UsernameLogin").value;
        let pWord = document.getElementById("PasswordLogin").value; 

        if (localStorage.getItem(uName) === null) {
            alert('Account with this username doesn\'t exist.');
            return false;
        }
        if (localStorage.getItem(uName) !== pWord) {
            alert('Incorrect Password.');
            return false;
        }
        localStorage.setItem("currUser", uName);
        return true;
    }

    function loadIndex() {
        let i = localStorage.length-1;
        let username = localStorage.key(i);
        let hu = document.getElementById("helloUser");
        hu.textContent = "Hello, " + (localStorage.getItem("currUser"));
        return true;
    }

    function loadHello() {
        let hu = document.getElementById("helloUser");
        hu.textContent = "Hello, " + (localStorage.getItem("currUser"));
        return true;
    }

    // search functionality
    document.querySelector(".navElement form").addEventListener("submit", function(event) {
        event.preventDefault();
        const query = document.getElementById("navSearch").value;
        searchEbooks(query);
    });

    // genre sorting
    document.getElementById("genre").addEventListener("change", function() {
        let selectedGenre = this.value;
        genreSelect(selectedGenre);
    });

    let addedItemIds = "";
    // add to cart icon change
    $('.addToCart').click(function() {
        if (this.textContent.includes('Add to Cart')) {
            $(this).fadeOut('fast', function() {
                $(this).html('Added <i class="fa-solid fa-check-circle" style="color: green;"></i>').fadeIn('fast');
            })
            addedToCart(this);
        }
    });




    function validatePurchase() {
        let x1 = y1 = u1 = z1 = s1 = t1 = state1 = false;
    
        // Validate State
        let state = document.forms["purchaseform"]["State"].value;
        if (state === "state-default") {
            alert("Please Choose a State!");
            document.getElementById('State').focus();
            return false
        } else {
            state1 = true;
        }
    
        // Validate Name
        let x = document.forms["purchaseform"]["Customer-name"].value;
        if (x === "") {
            alert("Name must be filled out");
            document.getElementById('Customer-name').focus();
            return false;
        } else {
            x1 = true;
        }
    
        // Validate Address 1
        let t = document.forms["purchaseform"]["Customer-add1"].value;
        if (t === "") {
            alert("Address 1 must be filled out");
            document.getElementById('Customer-add1').focus();
            return false;
        } else {
            t1 = true;
        }
    
        // Validate City
        let u = document.forms["purchaseform"]["Customer-city"].value;
        if (u === "") {
            alert("City must be filled out");
            document.getElementById('Customer-city').focus();
            return false;
        } else {
            u1 = true;
        }
    
        // Validate Pincode
        let s = document.forms["purchaseform"]["Customer-pincode"].value;
        if (s === "") {
            alert("PinCode must be filled out");
            document.getElementById('Customer-pincode').focus();
            return false;
        } else {
            s1 = true;
        }
    
        // Validate Phone Number
        let y = document.forms["purchaseform"]["Customer-purchasePhone"].value;
        if (y === "") {
            alert("Phone Number must be filled out");
            document.getElementById('Customer-purchasePhone').focus();
            return false;
        } else if (y.length !== 10 || isNaN(y)) {
            alert("Phone Number is incorrect!");
            document.getElementById('Customer-purchasePhone').focus();
            return false;
        } else {
            y1 = true;
        }
    
        // Validate Email
        let re = /\S+@\S+\.\S+/;
        let z = document.forms["purchaseform"]["Customer-purchaseEmail"].value;
        if (!re.test(z)) {
            alert("Invalid Email Id");
            document.getElementById('Customer-purchaseEmail').value = "";
            document.getElementById('Customer-purchaseEmail').focus();
            return false;
        } else {
            z1 = true;
        }
    
        if (x1 && z1 && t1 && u1 && s1 && y1 && state1 === true) {
            let stats = document.forms["purchaseform"]["Payment"].value;
    
            if (stats === "Card") {
                purchase();
            } else {
                alert("Thank you!\n\nYour Details have been registered");
            }
        }
    }
    

 //Razorpay backend
 function purchase() {
    // let amt = $("#order-amount").value;
    var options = {
        "key": "rzp_test_AWkeTb5W6qJ1YU", // Enter the Key ID generated from the Dashboard
        "amount": 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "USD",
        "name": "Book Emporium", //your business name
        "description": "Order Payment",
        "image": "C:\Users\DEVANSH\Desktop\Book Emporium copy\images\logo 3.O.png",
        "order_id": "order_O2Xal9EaIb8gS6", 
        "handler": function (response) {
            alert("Payment id is: " + response.razorpay_payment_id);
            alert("Order id is: " + response.razorpay_order_id);
            alert("Signature is: " + response.razorpay_signature);
        },
        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
            "name": 'Devansh', //your customer's name
            "email": 'devansh436@gmail.com', 
            "contact": 9974011205 //Provide the customer's phone number for better conversion rates 
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };

    var rzp1 = new Razorpay(options);

    rzp1.on('payment.failed', function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
        return false;
    });

    $("#rzp-button1").click(function (e) {
        rzp1.open();
        e.preventDefault();
    });
    return true;
}

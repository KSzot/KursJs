

// Budget Controller
var budgetController = (function() {

    //function constructors
    let Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    //let allExpenses = [];
    //let allIncomes = [];
    //let totalExpenses = 0;

    let calculateTotal = function(type) {
        
        let sum = 0;
        data.allItems[type].forEach(element => {
            sum += element.value;
        });
        data.totals[type] = sum;
    };
    
    //objects array
    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };


    return {
        //public function to add new item
        addItem: function(type, des, val) {
            let newItem, ID;
            /*[1 2 3 4 5], next id = 6
            [1 2 4 6 8], next id = 9 so
            id = last id + 1 */

            //Create new Id
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length-1].id + 1;

            } else {
                ID = 0;
            }        
            //Create new item
            if(type === "exp"){
                newItem = new Expense(ID, des, val);
            }else if(type === "inc") {
                newItem = new Income(ID, des, val);
            }
            // push it into our data structe
            data.allItems[type].push(newItem);
            
            //return the new element
            return newItem;
        },

        deleteItem: function(type, id) {
            let ids, index;
            // id = 6
            //[1 2 4 6 8] - index 3
            //Wyciagam wszystkie nr id z obiektu i zapisuje do tablicy
            ids = data.allItems[type].map(function(current) {
                return current.id;
            });
            //szukam w tablicy odpowiadajace id
            index = ids.indexOf(id);
            if(index !== -1) {
                data.allItems[type].splice(index, 1);
            }

        },

        calculateBudget: function() {

            //calculate total income and expenses
                calculateTotal("exp");
                calculateTotal("inc");
            //calculate the budget: income- expenses
                data.budget = data.totals.inc - data.totals.exp;
            //calculate the percentage of income that we spent
            if(data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }else {
                data.percentage = -1;
            }
        },

        getBudget: function() {

            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },
        //public function show array of adding items
        testing: function() {
            console.log(data);
        }
    };
})();

// User Interface Controller
var UIController = (function(){

    let DOMstring = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputButton: ".add__btn",
        incomeContainer: ".income__list",
        expensesContainer: ".expenses__list",
        budgetLabel: ".budget__value",
        incomeLabel: ".budget__income--value",
        expenseLabel: ".budget__expenses--value",
        percentageLabel: ".budget__expenses--percentage",
        container: ".container"
    };
    return {
        //public function get entered value
        getInPut: function() {

            return { // to bedzie obiekt 3 rzeczy
                type: document.querySelector(DOMstring.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstring.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstring.inputValue).value)
            };

        },
        //public function get variables
        getDOMstrings: function() {
            return DOMstring;
        },

        //public function add new list item in site
        addListItem: function(obj, type) {
            let stringHTML, newStringHtml, element;
            // create html string with placholder text
            // replace the placeholder text with some acutal data
                if (type === "inc") {
                    element = DOMstring.incomeContainer;
                stringHTML = `<div class="item clearfix" id="inc-${obj.id}"><div class="item__description">${obj.description}</div><div             class="right clearfix"><div class="item__value">${obj.value}</div><div class="item__delete"><button                                 class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`;
                } else if (type === "exp") {
                    element = DOMstring.expensesContainer;
                 stringHTML = `<div class="item clearfix" id="exp-${obj.id}">
                    <div class="item__description">${obj.description}</div>
                    <div class="right clearfix">
                    <div class="item__value">${obj.value}</div>
                    <div class="item__percentage">21%</div>
                    <div class="item__delete">
                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                    </div>
                    </div>`;
                }
            
            // Insert the html into the DOM
                document.querySelector(element).insertAdjacentHTML("beforeend", stringHTML);

        },

        deleteListItem: function(selectorId) {
            let el;
            el = document.getElementById(selectorId);
            el.parentNode.removeChild(el);
        },
        displayBudget: function(obj) {
            document.querySelector(DOMstring.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstring.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstring.expenseLabel).textContent = obj.totalExp;
            document.querySelector(DOMstring.percentageLabel).textContent = obj.percentage;
            
            if(obj.percentage > 0) {
                document.querySelector(DOMstring.percentageLabel).textContent = obj.percentage + "%"; 
            }else {
                document.querySelector(DOMstring.percentageLabel).textContent = "---";

            }
        },

        clearFields: function() {
            // fields przez queryall jest lista, nie tablica. Wywolanie slice.call zwroci mi tablice
            let fields, fieldsArr;
            fields = document.querySelectorAll(`${DOMstring.inputDescription},${DOMstring.inputValue}`);

            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(element => {
                element.value = "";
            });
            fieldsArr[0].focus();
        }
    };

    
})();


// Global app Controller
var controller = (function(budgetCtrl, UICtrl) {


    let setupEventListeners = function() {
        let DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener("click", ctrlAddItem);
    
        document.addEventListener("keypress", function(event) {
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();

        }
    });

        document.querySelector(DOM.container).addEventListener("click", ctrlDeleteItem);
    };

    let updateBudget = function() {
        let budget;
        //1. Calculate the buget
            budgetCtrl.calculateBudget();
        //2. return the bugdet
            budget = budgetCtrl.getBudget();
        //3. Display the Budget on the UI
            UICtrl.displayBudget(budget);
};

    let ctrlAddItem = function() {
        let input, newItem;

        //1. Get the field input data
        input = UICtrl.getInPut();

        if(input.description !== "" && !isNaN(input.value) && input.value > 0) {
            //2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            //3. Add new item to UI
            UICtrl.addListItem(newItem, input.type);

            //4 Clear the fields
            UICtrl.clearFields();

            //5. Calculate and update budget
            updateBudget();
        }
    };

    let ctrlDeleteItem = function(event) {
        let itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        console.log(itemID);
    
        if(itemID) {
            splitID = itemID.split("-");
            type = splitID[0];
            ID = parseInt(splitID[1]);
            //1. delete the item from the data structure
                budgetCtrl.deleteItem(type, ID);
            //2. delete the item from the ui
            UICtrl.deleteListItem(itemID);
            //3. update and show the new bugdet
            updateBudget();
        }
    }

    return {
        init: function() {
            alert("Application is started");
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1});
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();
ej.treegrid.TreeGrid.Inject(ej.treegrid.Page, ej.treegrid.Freeze);
let employeeData = [
    {
        "ID": "EMP001",
        "Employee": "Steven Buchanan",
        "FullName": "StevenBuchanan",
        "Department": "Executive Management",
        "JobTitle": "CEO",
        "EmployeeType": "Permanent",
        "Location": "USA",
        "JoinDate": new Date('2018-04-23'),
        "Salary": 300000,
        "Status": "Available",
        "Email": 'stevenbuchanan@gmail.com',
        "contact": '1234567890',
        "attendance": '95%',
        "leaveCount": 2,
        "Shift": "Morning",
        "Experience": 20,
        "WorkMode": "Remote",
        "Age": 45,
        "Children": [
            {
                "ID": "EMP002",
                "Employee": "Romey Wilson",
                "FullName": "RomeyWilson",
                "Department": "Customer Support",
                "JobTitle": "Manager",
                "EmployeeType": "Permanent",
                "Location": "Bangladesh",
                "JoinDate": new Date('2018-04-23'),
                "Salary": 150000,
                "Status": "Busy",
                "Email": 'romeywilson@gmail.com',
                "contact": '9876543210',
                "attendance": '88%',
                "leaveCount": 4,
                "projectDetails": 'AI Chatbot',
                "projectStatus": 'Pending',
                "Shift": "Morning",
                "Experience": 10,
                "WorkMode": "Remote",
                "Age": 35,
                "Children": [
                    {
                        "ID": "EMP003",
                        "Employee": "Robert King",
                        "FullName": "RobertKing",
                        "Department": "Customer Support",
                        "JobTitle": "Team Lead",
                        "EmployeeType": "Permanent",
                        "Location": "Germany",
                        "JoinDate": new Date('2018-04-23'),
                        "Salary": 100000,
                        "Status": "Away",
                        "Email": 'robertking@gmail.com',
                        "contact": '5551112233',
                        "attendance": '98%',
                        "leaveCount": 1,
                        "projectDetails": 'AI Chatbot',
                        "projectStatus": 'In Progress',
                        "Shift": "Morning",
                        "Experience": 7,
                        "WorkMode": "Remote",
                        "Age": 30,
                        "Children": [
                            {
                                "ID": "EMP004",
                                "Employee": "Andrew Fuller",
                                "FullName": "AndrewFuller",
                                "Department": "Customer Support",
                                "JobTitle": "Employee",
                                "EmployeeType": "Contract",
                                "Location": "Canada",
                                "JoinDate": new Date('2018-04-23'),
                                "Salary": 60000,
                                "Status": "Available",
                                "Email": 'andrewfuller@gmail.com',
                                "contact": '5551112233',
                                "attendance": '98%',
                                "leaveCount": 1,
                                "projectDetails": 'AI Chatbot',
                                "projectStatus": 'In Progress',
                                "Shift": "Morning",
                                "Experience": 2,
                                "WorkMode": "On-site",
                                "Age": 45,
                            },
                            {
                                "ID": "EMP005",
                                "Employee": "Anne Dodsworth",
                                "FullName": "AnneDodsworth",
                                "Department": "Customer Support",
                                "JobTitle": "Employee",
                                "EmployeeType": "Permanent",
                                "Location": "Egypt",
                                "JoinDate": new Date('2018-04-23'),
                                "Salary": 70000,
                                "Status": "Available",
                                "Email": 'annedodsworth@gmail.com',
                                "contact": '5551112233',
                                "attendance": '98%',
                                "leaveCount": 1,
                                "projectDetails": 'AI Chatbot',
                                "projectStatus": 'In Progress',
                                "Shift": "Morning",
                                "Experience": 1,
                                "WorkMode": "On-site",
                                "Age": 45,
                            }
                        ]
                    }
                ]
            },
            {
                "ID": "EMP006",
                "Employee": "David William",
                "FullName": "DavidWilliam",
                "Department": "Product",
                "JobTitle": "Manager",
                "EmployeeType": "Permanent",
                "Location": "Greece",
                "JoinDate": new Date('2018-04-23'),
                "Salary": 170000,
                "Status": "Away",
                "Email": 'davidwilliam@gmail.com',
                "contact": '5551112233',
                "attendance": '98%',
                "leaveCount": 1,
                "projectDetails": 'HR Portal',
                "projectStatus": 'Pending',
                "Shift": "Morning",
                "Experience": 12,
                "WorkMode": "Remote",
                "Age": 34,
                "Children": [
                    {
                        "ID": "EMP007",
                        "Employee": "Janet Leverling",
                        "FullName": "JanetLeverling",
                        "Department": "Product",
                        "JobTitle": "Team Lead",
                        "EmployeeType": "Permanent",
                        "Location": "USA",
                        "JoinDate": new Date('2018-04-23'),
                        "Salary": 120000,
                        "Status": "Offline",
                        "Email": 'janetleverling@gmail.com',
                        "contact": '5551112233',
                        "attendance": '98%',
                        "leaveCount": 1,
                        "projectDetails": 'HR Portal',
                        "projectStatus": 'In Progress',
                        "Shift": "Morning",
                        "Experience": 7,
                        "WorkMode": "Remote",
                        "Age": 29,
                        "Children": [
                            {
                                "ID": "EMP008",
                                "Employee": "Laura Callahan",
                                "FullName": "LauraCallahan",
                                "Department": "Product",
                                "JobTitle": "Employee",
                                "EmployeeType": "Permanent",
                                "Location": "Bangladesh",
                                "JoinDate": new Date('2018-04-23'),
                                "Salary": 80000,
                                "Status": "Be Right Back",
                                "Email": 'lauracallahan@gmail.com',
                                "contact": '5551112233',
                                "attendance": '98%',
                                "leaveCount": 1,
                                "projectDetails": 'HR Portal',
                                "projectStatus": 'Completed',
                                "Shift": "Morning",
                                "Experience": 3,
                                "WorkMode": "On-site",
                                "Age": 26,
                            },
                            {
                                "ID": "EMP009",
                                "Employee": "Margaret Peacock",
                                "FullName": "MargaretPeacock",
                                "Department": "Product",
                                "JobTitle": "Employee",
                                "EmployeeType": "Contract",
                                "Location": "Germany",
                                "JoinDate": new Date('2018-04-23'),
                                "Salary": 75000,
                                "Status": "Do Not Disturb",
                                "Email": 'margaretpeacock@gmail.com',
                                "contact": '5551112233',
                                "attendance": '98%',
                                "leaveCount": 1,
                                "projectDetails": 'HR Portal',
                                "projectStatus": 'Completed',
                                "Shift": "Morning",
                                "Experience": 2,
                                "WorkMode": "On-site",
                                "Age": 24,
                            }
                        ]
                    }
                ]
            },
            {
                "ID": "EMP010",
                "Employee": "Michael Suyama",
                "FullName": "MichaelSuyama",
                "Department": "Legal",
                "JobTitle": "Manager",
                "EmployeeType": "Permanent",
                "Location": "Canada",
                "JoinDate": new Date('2018-04-23'),
                "Salary": 160000,
                "Status": "Available",
                "Email": 'michaelsuyama@gmail.com',
                "contact": '5551112233',
                "attendance": '98%',
                "leaveCount": 1,
                "Shift": "Morning",
                "Experience": 13,
                "WorkMode": "On-site",
                "Age": 36,
                "Children": [
                    {
                        "ID": "EMP011",
                        "Employee": "Nancy Davolio",
                        "FullName": "NancyDavolio",
                        "Department": "Legal",
                        "JobTitle": "Team Lead",
                        "EmployeeType": "Permanent",
                        "Location": "Egypt",
                        "JoinDate": new Date('2018-04-23'),
                        "Salary": 110000,
                        "Status": "Available",
                        "Email": 'nancydavolio@gmail.com',
                        "contact": '5551112233',
                        "attendance": '98%',
                        "leaveCount": 1,
                        "Shift": "Morning",
                        "Experience": 10,
                        "WorkMode": "On-site",
                        "Age": 32,
                        "Children": [
                            {
                                "ID": "EMP012",
                                "Employee": "Steven Buchanan",
                                "FullName": "StevenBuchanan",
                                "Department": "Legal",
                                "JobTitle": "Employee",
                                "EmployeeType": "Permanent",
                                "Location": "Greece",
                                "JoinDate": new Date('2018-04-23'),
                                "Salary": 85000,
                                "Status": "Busy",
                                "Email": 'stevenbuchanan@gmail.com',
                                "contact": '5551112233',
                                "attendance": '98%',
                                "leaveCount": 1,
                                "Shift": "Morning",
                                "Experience": 3,
                                "WorkMode": "On-site",
                                "Age": 25,
                            },
                            {
                                "ID": "EMP013",
                                "Employee": "Janet Leverling",
                                "FullName": "JanetLeverling",
                                "Department": "Legal",
                                "JobTitle": "Employee",
                                "EmployeeType": "Contract",
                                "Location": "USA",
                                "JoinDate": new Date('2018-04-23'),
                                "Salary": 60000,
                                "Status": "Offline",
                                "Email": 'janetleverling@gmail.com',
                                "contact": '5551112233',
                                "attendance": '98%',
                                "leaveCount": 1,
                                "Shift": "Morning",
                                "Experience": 1,
                                "WorkMode": "On-site",
                                "Age": 23,
                            }
                        ]
                    }
                ]
            },
            {
                "ID": "EMP014",
                "Employee": "Laura Callahan",
                "FullName": "LauraCallahan",
                "Department": "Design",
                "JobTitle": "Manager",
                "EmployeeType": "Permanent",
                "Location": "Bangladesh",
                "JoinDate": new Date('2018-04-23'),
                "Salary": 140000,
                "Status": "Available",
                "Email": 'lauracallahan@gmail.com',
                "contact": '5551112233',
                "attendance": '98%',
                "leaveCount": 1,
                "projectDetails": 'Payroll System',
                "projectStatus": 'Completed',
                "Shift": "Morning",
                "Experience": 15,
                "WorkMode": "Remote",
                "Age": 39,
                "Children": [
                    {
                        "ID": "EMP015",
                        "Employee": "Romey Wilson",
                        "FullName": "RomeyWilson",
                        "Department": "Design",
                        "JobTitle": "Team Lead",
                        "EmployeeType": "Permanent",
                        "Location": "Germany",
                        "JoinDate": new Date('2018-04-23'),
                        "Salary": 105000,
                        "Status": "Be Right Back",
                        "Email": 'romeywilson@gmail.com',
                        "contact": '5551112233',
                        "attendance": '98%',
                        "leaveCount": 1,
                        "projectDetails": 'Payroll System',
                        "projectStatus": 'Completed',
                        "Shift": "Morning",
                        "Experience": 10,
                        "WorkMode": "Remote",
                        "Age": 32,
                        "Children": [
                            {
                                "ID": "EMP016",
                                "Employee": "Nancy Davolio",
                                "FullName": "NancyDavolio",
                                "Department": "Design",
                                "JobTitle": "Employee",
                                "EmployeeType": "Contract",
                                "Location": "Canada",
                                "JoinDate": new Date('2018-04-23'),
                                "Salary": 70000,
                                "Status": "Busy",
                                "Email": 'nancydavolio@gmail.com',
                                "contact": '5551112233',
                                "attendance": '98%',
                                "leaveCount": 1,
                                "projectDetails": 'Payroll System',
                                "projectStatus": 'Completed',
                                "Shift": "Morning",
                                "Experience": 5,
                                "WorkMode": "On-site",
                                "Age": 28,
                            },
                            {
                                "ID": "EMP017",
                                "Employee": "Robert King",
                                "FullName": "RobertKing",
                                "Department": "Design",
                                "JobTitle": "Employee",
                                "EmployeeType": "Permanent",
                                "Location": "Greece",
                                "JoinDate": new Date('2018-04-23'),
                                "Salary": 80000,
                                "Status": "Available",
                                "Email": 'robertking@gmail.com',
                                "contact": '5551112233',
                                "attendance": '98%',
                                "leaveCount": 1,
                                "projectDetails": 'Payroll System',
                                "projectStatus": 'Completed',
                                "Shift": "Morning",
                                "Experience": 2,
                                "WorkMode": "On-site",
                                "Age": 24,
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

var statusInterval = null;

var statusOptions = ['Available', 'Busy', 'Be Right Back', 'Do Not Disturb', 'Away', 'Offline'];
var statusColors = {
    'Available': '#00a623',
    'Be Right Back': '#a68e00',
    'Busy': '#a61300',
    'Do Not Disturb': '#a61300',
    'Away': '#e2c800',
    'Offline': 'gray'
};

function updateStatusRandomly(data) {
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        item.Status = statusOptions[Math.floor(Math.random() * statusOptions.length)];
        item.StatusColor = statusColors[item.Status];
        if (item.Children) updateStatusRandomly(item.Children);
    }
}

var tree;

function getColumns(viewer) {
    var baseColumns = [
        { field: 'ID', headerTemplate: '#idHeaderTemplate', width: 80, textAlign: 'Left' },
        { template: '#employeetemplate', headerTemplate: '#employeeHeaderTemplate', width: 150 },
        { field: 'Department', headerTemplate: '#departmentHeaderTemplate', width: 150 },
    ];

    if (viewer === 'hr') {
        return baseColumns.concat([
            { template: '#flagtemplate', headerTemplate: '#locationHeaderTemplate', width: 120 },
            { field: 'JoinDate', headerTemplate: '#joinDateHeaderTemplate', textAlign: 'Right', width: 120, format: { skeleton: 'yMd', type: 'date' } },
            { field: 'Salary', headerTemplate: '#salaryHeaderTemplate', format: 'c2', textAlign: 'Right', width: 120 },
            { template: '#emailtemplate', headerTemplate: '#emailHeaderTemplate', textAlign: 'Center', width: 150 },
        ]);
    } else if (viewer === 'employee') {
        return baseColumns.concat([
            { field: 'Age', headerTemplate: '#ageHeaderTemplate', textAlign: 'Right', width: 80 },
            { field: 'WorkMode', headerTemplate: '#workModeHeaderTemplate', textAlign: 'Right', width: 120 },
            { template: '#emailtemplate', headerTemplate: '#emailHeaderTemplate', textAlign: 'Center', width: 100 },
        ]);
    } else if (viewer === 'frontoffice') {
        return baseColumns.concat([
            { field: 'leaveCount', headerTemplate: '#leaveCountHeaderTemplate', textAlign: 'Right', width: 120 },
            { field: 'attendance', headerTemplate: '#attendanceHeaderTemplate', textAlign: 'Right', width: 120 },
            { template: '#statustemplate', headerTemplate: '#statusHeaderTemplate', width: 120 },
        ]);
    } else if (viewer === 'pm') {
        return baseColumns.concat([
            { field: 'projectDetails', headerTemplate: '#projectHeaderTemplate', width: 150 },
            { field: 'projectStatus', headerTemplate: '#projectStatusHeaderTemplate', width: 120 },
        ]);
    } else {
        return baseColumns;
    }
}

function initTreeGrid(viewer) {
    if (statusInterval) {
        clearInterval(statusInterval);
        statusInterval = null;
    }

    updateStatusRandomly(employeeData);

    if (tree) {
        tree.columns = getColumns(viewer);
        tree.refreshColumns();
    } else {
        tree = new ej.treegrid.TreeGrid({
            dataSource: employeeData,
            childMapping: 'Children',
            treeColumnIndex: 0,
            columns: getColumns(viewer),
            height: 400,
            allowPaging: true,
            enableHover: true,
            pageSettings: { pageSize: 10 },
            gridLines: 'Both',
        });
        tree.appendTo('#TreeGrid');
    }

    if (viewer === 'frontoffice') {
        statusInterval = setInterval(function () {
            updateStatusRandomly(employeeData);
            tree.refresh();
        }, 3000);
    }
}

document.getElementById('viewer').addEventListener('change', function (e) {
    var selectedRole = e.target.value;
    initTreeGrid(selectedRole);
});

initTreeGrid('hr');

var viewerRoles = [
    { id: 'hr', role: 'HR' },
    { id: 'employee', role: 'Employee' },
    { id: 'frontoffice', role: 'Front Office' },
    { id: 'pm', role: 'Project Manager' }
];

var viewerDropdown = new ej.dropdowns.DropDownList({
    dataSource: viewerRoles,
    fields: { text: 'role', value: 'id' },
    placeholder: 'Select Viewer Role',
    value: 'hr',
    width: '200px',
    change: function (args) {
        initTreeGrid(args.value);
    }
});
viewerDropdown.appendTo('#viewer');

var instance = new ej.base.Internationalization();
window.format = function (value) {
    return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
};
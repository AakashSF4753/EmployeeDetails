ej.treegrid.TreeGrid.Inject(ej.treegrid.Page, ej.treegrid.Freeze, ej.treegrid.Sort, ej.treegrid.Filter);
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
        "LeaveAvailability": { casual: 10, earned: 12, sick: 12 },
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
                "Status": "Available",
                "Email": 'romeywilson@gmail.com',
                "contact": '9876543210',
                "attendance": '88%',
                "LeaveAvailability": { casual: 12, earned: 8, sick: 12 },
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
                        "Status": "Leave",
                        "Email": 'robertking@gmail.com',
                        "contact": '5551112233',
                        "attendance": '98%',
                        "LeaveAvailability": { casual: 12, earned: 10, sick: 11 },
                        "leaveCount": 3,
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
                                "LeaveAvailability": { casual: 12, earned: 11, sick: 12 },
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
                                "LeaveAvailability": { casual: 10, earned: 11, sick: 11 },
                                "leaveCount": 4,
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
                "Status": "Leave",
                "Email": 'davidwilliam@gmail.com',
                "contact": '5551112233',
                "attendance": '98%',
                "LeaveAvailability": { casual: 11, earned: 12, sick: 12 },
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
                        "Status": "Available",
                        "Email": 'janetleverling@gmail.com',
                        "contact": '5551112233',
                        "attendance": '98%',
                        "LeaveAvailability": { casual: 10, earned: 11, sick: 12 },
                        "leaveCount": 3,
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
                                "Status": "Leave",
                                "Email": 'lauracallahan@gmail.com',
                                "contact": '5551112233',
                                "attendance": '98%',
                                "LeaveAvailability": { casual: 12, earned: 12, sick: 10 },
                                "leaveCount": 2,
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
                                "Status": "Available",
                                "Email": 'margaretpeacock@gmail.com',
                                "contact": '5551112233',
                                "attendance": '98%',
                                "LeaveAvailability": { casual: 12, earned: 11, sick: 12 },
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
                "LeaveAvailability": { casual: 8, earned: 12, sick: 11 },
                "leaveCount": 5,
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
                        "LeaveAvailability": { casual: 9, earned: 10, sick: 12 },
                        "leaveCount": 5,
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
                                "Status": "Available",
                                "Email": 'stevenbuchanan@gmail.com',
                                "contact": '5551112233',
                                "attendance": '98%',
                                "LeaveAvailability": { casual: 11, earned: 10, sick: 12 },
                                "leaveCount": 3,
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
                                "Status": "Leave",
                                "Email": 'janetleverling@gmail.com',
                                "contact": '5551112233',
                                "attendance": '98%',
                                "LeaveAvailability": { casual: 11, earned: 11, sick: 10 },
                                "leaveCount": 4,
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
                "LeaveAvailability": { casual: 11, earned: 12, sick: 12 },
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
                        "Status": "Leave",
                        "Email": 'romeywilson@gmail.com',
                        "contact": '5551112233',
                        "attendance": '98%',
                        "LeaveAvailability": { casual: 9, earned: 11, sick: 10 },
                        "leaveCount": 6,
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
                                "Status": "Available",
                                "Email": 'nancydavolio@gmail.com',
                                "contact": '5551112233',
                                "attendance": '98%',
                                "LeaveAvailability": { casual: 12, earned: 11, sick: 12 },
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
                                "LeaveAvailability": { casual: 10, earned: 12, sick: 12 },
                                "leaveCount": 2,
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

var tree;
const currentYear = new Date().getFullYear();

function getColumns(viewer) {
    let baseColumns = [
        { field: 'ID', headerText: 'ID', width: 100, textAlign: 'Left' },
        { template: '#employeetemplate', headerTemplate: '#employeeHeaderTemplate', width: 150 },
        { field: 'Department', headerText: 'Department', width: 140 },
    ];

    switch (viewer) {
        case 'hr':
            return [
                ...baseColumns,
                { template: '#flagtemplate', headerTemplate: '#locationHeaderTemplate', width: 120 },
                { field: 'JoinDate', headerTemplate: '#joinDateHeaderTemplate', textAlign: 'Right', width: 120, format: { skeleton: 'yMd', type: 'date' } },
                { field: 'Salary', headerText: 'Salary', format: 'c2', textAlign: 'Right', width: 120 },
                { template: '#emailtemplate', headerTemplate: '#emailHeaderTemplate', textAlign: 'Center', width: 150 },
            ];
        case 'employee':
            return [
                ...baseColumns,
                { field: 'Status', headerText: 'Presence', width: 100 },
                { field: 'WorkMode', headerText: 'Work Mode', textAlign: 'Right', width: 120 },
                { template: '#emailtemplate', headerTemplate: '#emailHeaderTemplate', textAlign: 'Center', width: 100 },
            ];
        case 'helpdesk':
            return [
                ...baseColumns,
                { field: 'attendance', headerText: 'Attendance', textAlign: 'Right', width: 120 },
                { field: 'leaveCount', headerTemplate: '#leaveCountHeaderTemplate', textAlign: 'Right', width: 120 },
                { template: '#leaveAvailabilityTemplate', headerText: 'Leave Availability', width: 240 },
            ];
        case 'pm':
            return [
                ...baseColumns,
                { field: 'projectDetails', headerText: 'Project', width: 150 },
                { field: 'projectStatus', headerText: 'Project Status', width: 120 },
            ];
        default:
            return baseColumns;
    }
}

function initTreeGrid(viewer) {
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
            allowSorting: true,
            allowFiltering: true,
            filterSettings: {
                type: 'Menu',
                hierarchyMode: 'Child',
                mode: 'Immediate',
            },
            enableHover: true,
            pageSettings: { pageSize: 10 },
            gridLines: 'Both',
            dataBound: function () {
                const leaveYearSpan = document.getElementById('leaveYear');
                    if (leaveYearSpan) {
                        leaveYearSpan.textContent = new Date().getFullYear();
                    }
            }
        });
        tree.appendTo('#TreeGrid');
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
    { id: 'helpdesk', role: 'Help Desk' },
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
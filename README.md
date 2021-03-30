
## Getting Started

First, run the development server:

```bash
func start
```

Available end points:

[GET] http://localhost:7071/api/getBranch

[GET] http://localhost:7071/api/getEmployee

[GET] http://localhost:7071/api/getSchedule

[POST] http://localhost:7071/api/newBranch
Example request:
{"branchName": "bar"}

[POST] http://localhost:7071/api/newEmployee
Example request:
{"employeeName": "foo", "employeeEmail": "foo@gmail.com"}

[POST] http://localhost:7071/api/newSchedule
Example request:
{"name": "foo", "email": "foo@gmail.com", "date": "2021-07-15 17:30"}
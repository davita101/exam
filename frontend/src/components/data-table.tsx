import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, Circle, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Label } from "./ui/label"
import { Badge } from "./ui/badge"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"

const data: Student[] = [
  {
    _id: "49c6589f-aba8-4d02-b3ce2-548de0b51d40",
    name: "Alice Johnson",
    age: 21,
    studentFbLink: "https://facebook.com/alicejohnson",
    email: "alicejohnson@example.com",
    githubLink: "https://github.com/alicejohnson",
    speed: 4,
    group: "44",
    role: "miniLeader",
    leaderId: "675dee40a1bb4008aab7ce43",
    parentFbLink: "https://facebook.com/alicejohnsonparent",
    githubToken: "123124145666424564564345345",
    githubLastUpdate: "2021-09-02",
    fines: {
      githubFine: 1,
      miniLeaderFine: 2,
      miniStudentFine: 3
    },
    aura: {
      points: 9999,
      classWork: 9999,
      attendance: 9999,
      help: 9999,
      camera: 9999,
      answers: 99993
    },
    payedInfo: false,
    comment: {
      leaderComment: "123",
      leaderProof: "123",
      controller: {
        miniLeaderController: "miniLeaderController",
        leaderController: "leaderController"
      }
    }
  },
  {
    _id: "49c6589f-a1ba8-4d02-bce2-548de03b51d40",
    name: "gio lomi",
    age: 21,
    studentFbLink: "https://facebook.com/alicejohnson",
    email: "alicejohnson@example.com",
    githubLink: "https://github.com/alicejohnson",
    speed: 6,
    role: "member",
    group: "45",
    leaderId: "675dee40a1bb4008aab7ce43",
    parentFbLink: "https://facebook.com/alicejohnsonparent",
    githubToken: "45347565343454736464564564345345",
    githubLastUpdate: "2021-09-04",
    fines: {
      githubFine: 1,
      miniLeaderFine: 2,
      miniStudentFine: 3
    },
    aura: {
      points: 88,
      classWork: 88,
      attendance: 88,
      help: 88,
      camera: 88,
      answers: 883
    },
    payedInfo: false,
    comment: {
      leaderComment: "123",
      leaderProof: "123",
      controller: {
        miniLeaderController: "miniLeaderController",
        leaderController: "leaderController"
      }
    }
  },
  {
    _id: "49c6589f-aba81-4d02-bce2-54568de0b51d40",
    name: "davit lomim",
    age: 21,
    studentFbLink: "https://facebook.com/alicejohnson",
    email: "alicejohnson@example.com",
    githubLink: "https://github.com/alicejohnson",
    speed: 99,
    role: "member",
    group: "46",
    leaderId: "675dee40a1bb4008aab7ce43",
    parentFbLink: "https://facebook.com/alicejohnsonparent",
    githubToken: "4534534345436464564564345345",
    githubLastUpdate: "2021-09-05",
    fines: {
      githubFine: 1,
      miniLeaderFine: 1,
      miniStudentFine: 1
    },
    aura: {
      points: 9999999,
      classWork: 999999,
      attendance: 999999,
      help: 999999,
      camera: 999999,
      answers: 9993999
    },
    payedInfo: true,
    comment: {
      leaderComment: "123",
      leaderProof: "123",
      controller: {
        miniLeaderController: "123",
        leaderController: "123"
      }
    }
  },
  {
    "_id": "49c6589f-aba8-4d0212-bce2-548de0b51d40",
    "name": "nameless",
    "age": 21,
    "studentFbLink": "https://facebook.com/alicejohnson",
    "email": "alicejohnson@example.com",
    "speed": 5,
    "role": "member",
    "group": "46",
    "leaderId": "675dee40a1bb4008aab7ce43",
    "parentFbLink": "https://facebook.com/alicejohnsonparent",
    "githubLink": "https://github.com/alicejohnson",
    "githubToken": "12345624412423423242342342414",
    "githubLastUpdate": "2021-09-06",
    "fines": {
      "githubFine": 1,
      "miniLeaderFine": 1,
      "miniStudentFine": 1
    },
    "aura": {
      "points": 1,
      "classWork": 1,
      "attendance": 1,
      "help": 1,
      "camera": 1,
      "answers": 1
    },
    "payedInfo": true,
    "comment": {
      "leaderComment": "123",
      "leaderProof": "123",
      "controller": {
        "miniLeaderController": "123",
        "leaderController": "123"
      }
    }
  },
]

export type Student = {
  _id: string
  name: string
  age: number
  studentFbLink: string
  email: string
  githubLink: string
  speed: number
  group: string
  leaderId: string
  role: string
  parentFbLink: string
  githubToken: string
  githubLastUpdate: string
  fines: {
    githubFine: number
    miniLeaderFine: number
    miniStudentFine: number
  }
  aura: {
    points: number
    classWork: number
    attendance: number
    help: number
    camera: number
    answers: number
  }
  payedInfo: boolean
  comment: {
    leaderComment: string
    leaderProof: string
    controller: {
      miniLeaderController: string
      leaderController: string
    }
  }
}

export type Payment = {
  _id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const LeaderComment = ({ row }) => {
  const [comment, setComment] = React.useState(row.getValue("comment"));
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setComment((prev) => {
      const newComment = { ...prev };
      if (id in newComment) {
        newComment[id] = value;
      } else if (id in newComment.controller) {
        newComment.controller[id] = value;
      }
      return newComment;
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the comment here (e.g., send it to the server)
    setIsDialogOpen(false); // Close the dialog
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsDialogOpen(true)}>Edit Comment</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Comment</DialogTitle>
          <DialogDescription>
            Make changes to the comment here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="leaderComment" className="text-right">
                Leader Comment
              </Label>
              <Input id="leaderComment" value={comment.leaderComment} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="leaderProof" className="text-right">
                Leader Proof
              </Label>
              <Input id="leaderProof" value={comment.leaderProof} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="miniLeaderController" className="text-right">
                Mini Leader Controller
              </Label>
              <Input id="miniLeaderController" value={comment.controller.miniLeaderController} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="leaderController" className="text-right">
                Leader Controller
              </Label>
              <Input id="leaderController" value={comment.controller.leaderController} onChange={handleChange} className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeaderComment;

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          role
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize text-center">
        {<Badge>{row.getValue("role")}</Badge>}
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          name
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize text-center">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "age",
    header: "age",
    cell: ({ row }) => (
      <div className="capitalize text-center"><Badge variant="outline">{row.getValue("age")}</Badge></div>
    ),
  },
  {
    accessorKey: "email",
    header: "email",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "studentFbLink",
    header: "studentFbLink",
    cell: ({ row }) => (
      <div className="capitalize text-center"><Link target="_blank" to={row.getValue("studentFbLink")}><Button variant="link">Facebook</Button></Link></div>
    ),
  },
  {
    accessorKey: "githubLastUpdate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          LastUpdate
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("githubLastUpdate")}</div>
    ),
  },
  {
    accessorKey: "githubLink",
    header: "githubLink",
    cell: ({ row }) => (
      <div className="capitalize text-center"><Link target="_blank" to={row.getValue("githubLink")}><Button variant="link">githubLink</Button></Link></div>
    ),
  },
  {
    accessorKey: "speed",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          speed
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize text-center "><Badge variant="outline">{row.getValue("speed")}</Badge></div>
    ),
  },
  {
    accessorKey: "group",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          group
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize text-center"><Badge variant="outline">{row.getValue("group")}</Badge></div>
    ),
  },
  {
    accessorKey: "leaderId",
    header: "leaderId",
    cell: ({ row }) => (
      <div className="capitalize text-center"><Link target="_blank" to={row.getValue("leaderId")}><Button variant="link">leaderID</Button></Link></div>
    ),
  },
  {
    accessorKey: "parentFbLink",
    header: "parentFbLink",
    cell: ({ row }) => (
      <div className="capitalize text-center"><Link target="_blank" to={row.getValue("parentFbLink")}><Button variant="link">parenLink</Button></Link></div>
    ),
  },
  {
    accessorKey: "fines",
    header: () => {
      return (
        <Button
          variant="destructive"
        >
          fines
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" >@fines</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-40 duration-100">
          <div className="flex justify-between">
            <span>githubFine</span><span>{row.getValue("fines")["githubFine"]}</span>
          </div>
          <div className="flex justify-between">
            <span>miniLeaderFine</span><span>{row.getValue("fines")["miniLeaderFine"]}</span>
          </div>
          <div className="flex justify-between">
            <span>miniStudentFine</span><span>{row.getValue("fines")["miniStudentFine"]}</span>
          </div>
        </HoverCardContent>
      </HoverCard>
    ),
  },
  {
    accessorKey: "aura",
    header: () => {
      return (
        <Button
          variant="destructive"
        >
          aura
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" onTouchStart={(event) => event.preventDefault()}>@Aura</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-40 duration-100">
          <div className="flex justify-between">
            <span>points</span><span>{row.getValue("aura")["points"]}</span>
          </div>
          <div className="flex justify-between">
            <span>classWork</span><span>{row.getValue("aura")["classWork"]}</span>
          </div>
          <div className="flex justify-between">
            <span>attendance</span><span>{row.getValue("aura")["attendance"]}</span>
          </div>
          <div className="flex justify-between">
            <span>help</span><span>{row.getValue("aura")["help"]}</span>
          </div>
          <div className="flex justify-between">
            <span>camera</span><span>{row.getValue("aura")["camera"]}</span>
          </div>
          <div className="flex justify-between">
            <span>answers</span><span>{row.getValue("aura")["answers"]}</span>
          </div>
        </HoverCardContent>
      </HoverCard >
    ),
  },

  {
    accessorKey: "payedInfo",
    header: "payedInfo",
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("payedInfo") ? "True" : "False"}</div>
    ),
  },
  {
    accessorKey: "comment",
    header: "comment",
    cell: ({ row }) => <LeaderComment row={row} />,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      const [rowColor, setRowColor] = React.useState(() => {
        const savedColors = JSON.parse(localStorage.getItem('rowColors') || '{}');
        return savedColors[payment._id] || '';
      });

      React.useEffect(() => {
        const savedColors = JSON.parse(localStorage.getItem('rowColors') || '{}');
        savedColors[payment._id] = rowColor;
        localStorage.setItem('rowColors', JSON.stringify(savedColors));
      }, [rowColor, payment._id]);

      const handleColorChange = (color) => {
        setRowColor(color);
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment._id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>colors</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem onClick={() => handleColorChange('inherit')}>none</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleColorChange('var(action-color-white)')}><Circle color="var(--action-color-white)" />white</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleColorChange('var(--action-color-red)')}><Circle color="var(--action-color-red)" />red</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleColorChange('var(--action-color-green)')}><Circle color="var(--action-color-green)" />green</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleColorChange('var(--action-color-yellow)')}><Circle color="var(--action-color-yellow)" />yellow</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleColorChange('var(--action-color-purple)')}><Circle color="var(--action-color-purple)" />purple</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleColorChange('var(--action-color-orange)')}><Circle color="var(--action-color-orange)" />orange</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleColorChange('var(--action-color-pink)')}><Circle color="var(--action-color-pink)" />pink</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
]

export function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>(() => {
    const savedSorting = localStorage.getItem('sorting');
    return savedSorting ? JSON.parse(savedSorting) : [];
  });
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(() => {
    const savedFilters = localStorage.getItem('columnFilters');
    return savedFilters ? JSON.parse(savedFilters) : [];
  });
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>(() => {
    const savedVisibility = localStorage.getItem('columnVisibility');
    return savedVisibility ? JSON.parse(savedVisibility) : {};
  });
  const [rowSelection, setRowSelection] = React.useState(() => {
    const savedSelection = localStorage.getItem('rowSelection');
    return savedSelection ? JSON.parse(savedSelection) : {};
  });

  React.useEffect(() => {
    localStorage.setItem('sorting', JSON.stringify(sorting));
  }, [sorting]);

  React.useEffect(() => {
    localStorage.setItem('columnFilters', JSON.stringify(columnFilters));
  }, [columnFilters]);

  React.useEffect(() => {
    localStorage.setItem('columnVisibility', JSON.stringify(columnVisibility));
  }, [columnVisibility]);

  React.useEffect(() => {
    localStorage.setItem('rowSelection', JSON.stringify(rowSelection));
  }, [rowSelection]);

  const table = useReactTable({
    data: data.sort((a, b) => a.group < b.group ? 1 : -1),
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="grid auto-rows-min overflow-hidden gap-4 grid-cols-1">

      <div className="flex items-center py-4">
        <Input
          placeholder="Filter name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize text-center"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ScrollArea >
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    style={{ backgroundColor: JSON.parse(localStorage.getItem('rowColors') || '{}')[row.original._id] || '' }}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
    </div>
  )
}
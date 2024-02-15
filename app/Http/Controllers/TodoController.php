<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed'
        ]);

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        $token = $user->createToken('token')->plainTextToken;

        return response()->json([
            'success' => true,
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
        if (!Auth::attempt($data)) {
            return response()->json([
                'success' => false,
                'error' =>'The provided credentials are incorrect'
            ]);
        }

        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout()
    {
        $user = Auth::user();
        $user->currentAccessToken()->delete();

        return response()->json([
            'success' => true
        ]);
    }

    public function todos()
    {
        return response()->json([
            'todos' => $this->getAllTodos(),
        ]);
    }

    public function createOrUpdate(Request $request)
    {
        // return $request->input();
        $data = $request->validate([
            'id' => 'nullable',
            'name' => 'required',
            'description' => 'nullable'
        ]);
        if ($data['id']) {
            $todo = Todo::find($data['id']);
            $todo->update([
                'name' => $data['name'],
                'description' => $data['description']
            ]);
        }else {
            Todo::create($data);
        }

        return response()->json([
            'success' => true,
            'todos' => $this->getAllTodos(),
        ]);
    }

    public function deleteTodo($id)
    {
        $todo = Todo::find($id);
        if ($todo) {
            $todo->delete();
        }

        return response()->json([
            'success' => true,
            'todos' => $this->getAllTodos(),
        ]);
    }

    public function statusChange($id)
    {
        $todo = Todo::find($id);
        if ($todo) {
            $todo->is_completed = !$todo->is_completed;
            $todo->save();
        }

        return response()->json([
            'success' => true,
            'todos' => $this->getAllTodos(),
        ]);
    }

    public function editTodo($id)
    {
        $todo = Todo::find($id);

        return response()->json([
            'success' => true,
            'todo' => $todo,
        ]);
    }
    
    protected function getAllTodos()
    {
        $todos = Todo::orderby('created_at', 'desc')->paginate(5);
        if (!empty($todos)) {
            foreach ($todos as $todo) {
                $todo['formatted_created_at'] = $todo->created_at->diffForHumans();
            };
        }
        return $todos;
    }
}

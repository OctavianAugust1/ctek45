<?php

namespace App\Http\Controllers;

use Mail;
use App\Mail\OrderShipped;
use Illuminate\Http\Request;

class MailController extends Controller
{
    public function mail(Request $request)
    {
        $name = $request->name;
        $email = $request->email;
        $msg = $request->message;
        Mail::to('stas_petrov_01@mail.ru')->send(new OrderShipped($name, $email, $msg));
        return redirect()->back();
    }
}

<?php

namespace App\Http\Controllers;

use App\Mail\MessageReceived;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;


class MessageContactController extends Controller
{
    public function send(Request $request)
    {
        $message = request()->validate([
            'name' => 'required',
            'email' => 'required|email',
            'subject' => 'required|min:3',
            'content' => 'required|min:3'
        ]);
        return Mail::to(env('MAIL_FROM_ADDRESS'))->cc('soarsatlanta@yahoo.com')->queue(new MessageReceived($message));
    }
}

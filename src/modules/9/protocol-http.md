
[Source - https://code.tutsplus.com](https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177 "Permalink to HTTP: The Protocol Every Web Developer Must Know")

# HTTP: The Protocol Every Web Developer Must Know

HTTP stands for Hypertext Transfer Protocol. It's a stateless, application-layer protocol for communicating between distributed systems, and is the foundation of the modern web. As a web developer, we all must have a strong understanding of this protocol.

Let's review this powerful protocol through the lens of a web developer. We'll tackle the topic in two parts. In this first entry, we'll cover the basics and outline the various request and response headers. In the follow-up article, we'll review specific pieces of HTTP - namely caching, connection handling and authentication.

Although I'll mention some details related to headers, it's best to instead consult the RFC ([RFC 2616][1]) for in-depth coverage. I will be pointing to specific parts of the RFC throughout the article.

## Looking for a Quick Solution?

If you're having trouble with an HTTP error in WordPress&nbsp;that you need fixed, you can order an&nbsp;[Express HTTP error fix][2] on Envato Studio, and have the error fixed in one day for just $50.

![HTTP Error fix][3]

* * *

## HTTP Basics

HTTP allows for communication between a variety of hosts and clients, and supports a mixture of network configurations.

&gt; To make this possible, it assumes very little about a particular system, and does not keep state between different message exchanges.

This makes HTTP a **stateless** protocol. The communication usually takes place over TCP/IP, but any reliable transport can be used. The default port for TCP/IP is **80**, but other ports can also be used. 

![][4]

&gt; Custom headers can also be created and sent by the client.

Communication between a host and a client occurs, via a **request/response pair**. The client initiates an HTTP request message, which is serviced through a HTTP response message in return. We will look at this fundamental message-pair in the next section.

The current version of the protocol is **HTTP/1.1**, which adds a few extra features to the previous 1.0 version. The most important of these, in my opinion, includes _persistent connections_, _chunked transfer-coding_ and _fine-grained caching headers_. We'll briefly touch upon these features in this article; in-depth coverage will be provided in part two.

### URLs

At the heart of web communications is the request message, which are sent via Uniform Resource Locators (URLs). I'm sure you are already familiar with URLs, but for completeness sake, I'll include it here. URLs have a simple structure that consists of the following components:

![][5]

The protocol is typically `http`, but it can also be `https` for secure communications. The default port is `80`, but one can be set explicitly, as illustrated in the above image. The resource path is the _local path_ to the resource on the server.

### Verbs

&gt; There are also web debugging proxies, like [**Fiddler][6]** on Windows and [**Charles Proxy][7]** for OSX.

URLs reveal the identity of the particular host with which we want to communicate, but the action that should be performed on the host is specified via HTTP verbs. Of course, there are several actions that a client would like the host to perform. HTTP has formalized on a few that capture the essentials that are universally applicable for all kinds of applications.

These request verbs are:

* **GET**: _fetch_ an existing resource. The URL contains all the necessary information the server needs to locate and return the resource.
* **POST**: _create_ a new resource. POST requests usually carry a payload that specifies the data for the new resource.
* **PUT**: _update_ an existing resource. The payload may contain the updated data for the resource.
* **DELETE**: _delete_ an existing resource.

The above four verbs are the most popular, and most tools and frameworks explicitly expose these request verbs. `PUT` and `DELETE` are sometimes considered specialized versions of the `POST` verb, and they may be packaged as `POST` requests with the payload containing the exact action: _create_, _update_ or _delete_.

There are some lesser used verbs that HTTP also supports:

* **HEAD**: this is similar to GET, but without the message body. It's used to retrieve the server headers for a particular resource, generally to check if the resource has changed, via timestamps.
* **TRACE**: used to retrieve the hops that a request takes to round trip from the server. Each intermediate proxy or gateway would inject its IP or DNS name into the `Via` header field. This can be used for diagnostic purposes.
* **OPTIONS**: used to retrieve the server capabilities. On the client-side, it can be used to modify the request based on what the server can support.

### Status Codes

With URLs and verbs, the client can initiate requests to the server. In return, the server responds with status codes and message payloads. The status code is important and tells the client how to interpret the server response. The HTTP spec defines certain number ranges for specific types of responses:

#### 1xx: Informational Messages

&gt; All HTTP/1.1 clients are required to accept the `Transfer-Encoding` header.

This class of codes was introduced in HTTP/1.1 and is purely provisional. The server can send a `Expect: 100-continue` message, telling the client to continue sending the remainder of the request, or ignore if it has already sent it. HTTP/1.0 clients are supposed to ignore this header.

#### 2xx: Successful

This tells the client that the request was successfully processed. The most common code is **200 OK**. For a `GET` request, the server sends the resource in the message body. There are other less frequently used codes:

* **202** Accepted: the request was accepted but may not include the resource in the response. This is useful for async processing on the server side. The server may choose to send information for monitoring.
* **204** No Content: there is no message body in the response.
* **205** Reset Content: indicates to the client to reset its document view.
* **206** Partial Content: indicates that the response only contains partial content. Additional headers indicate the exact range and content expiration information.

#### 3xx: Redirection

&gt; 404 indicates that the resource is invalid and does not exist on the server.

This requires the client to take additional action. The most common use-case is to jump to a different URL in order to fetch the resource.

* **301** Moved Permanently: the resource is now located at a new URL. 
* **303** See Other: the resource is temporarily located at a new URL. The `Location` response header contains the temporary URL.
* **304** Not Modified: the server has determined that the resource has not changed and the client should use its cached copy. This relies on the fact that the client is sending `ETag` (Enttity Tag) information that is a hash of the content. The server compares this with its own computed `ETag` to check for modifications.

#### 4xx: Client Error

These codes are used when the server thinks that the client is at fault, either by requesting an invalid resource or making a bad request. The most popular code in this class is **404 Not Found**, which I think everyone will identify with. 404 indicates that the resource is invalid and does not exist on the server. The other codes in this class include:

* **400** Bad Request: the request was malformed.
* **401** Unauthorized: request requires authentication. The client can repeat the request with the `Authorization` header. If the client already included the `Authorization` header, then the credentials were wrong.
* **403** Forbidden: server has denied access to the resource.
* **405** Method Not Allowed: invalid HTTP verb used in the request line, or the server does not support that verb.
* **409** Conflict: the server could not complete the request because the client is trying to modify a resource that is newer than the client's timestamp. Conflicts arise mostly for PUT requests during collaborative edits on a resource.

#### 5xx: Server Error

This class of codes are used to indicate a server failure while processing the request. The most commonly used error code is **500 Internal Server Error**. The others in this class are:

* **501 Not Implemented**: the server does not yet support the requested functionality.
* **503 Service Unavailable**: this could happen if an internal system on the server has failed or the server is overloaded. Typically, the server won't even respond and the request will timeout.

### Request and Response Message Formats

So far, we've seen that _URLs, verbs and status codes_ make up the fundamental pieces of an HTTP request/response pair.

![][8]

Let's now look at the content of these messages. The HTTP specification states that a request or response message has the following generic structure:
    
    
    message = <start-line>
              *(<message-header>)
              CRLF
              [<message-body>]
    
    <start-line> = Request-Line | Status-Line 
    <message-header> = Field-Name ':' Field-Value

It's mandatory to place a new line between the message headers and body. The message can contain one or more headers, of which are broadly classified into:

The message body may contain the complete entity data, or it may be piecemeal if the chunked encoding (`Transfer-Encoding: chunked`) is used. All HTTP/1.1 clients are required to accept the `Transfer-Encoding` header.

#### General Headers

There are a few headers (general headers) that are shared by both request and response messages:
    
    
    general-header = Cache-Control            
                   | Connection        
                   | Date              
                   | Pragma            
                   | Trailer           
                   | Transfer-Encoding 
                   | Upgrade           
                   | Via               
                   | Warning

We have already seen some of these headers, specifically `Via` and `Transfer-Encoding`. We will cover `Cache-Control` and `Connection` in part two.

&gt; The status code is important and tells the client how to interpret the server response.

* `Via` header is used in a TRACE message and updated by all intermittent proxies and gateways
* `Pragma` is considered a custom header and may be used to include implementation-specific headers. The most commonly used pragma-directive is `Pragma: no-cache`, which really is `Cache-Control: no-cache` under HTTP/1.1. This will be covered in Part 2 of the article.
* The `Date` header field is used to timestamp the request/response message
* `Upgrade` is used to switch protocols and allow a smooth transition to a newer protocol.
* `Transfer-Encoding` is generally used to break the response into smaller parts with the `Transfer-Encoding: chunked` value. This is a new header in HTTP/1.1 and allows for streaming of response to the client instead of one big payload.

#### Entity headers

Request and Response messages may also include entity headers to provide meta-information about the the content (aka Message Body or Entity). These headers include:
    
    
    entity-header  = Allow                    
                   | Content-Encoding  
                   | Content-Language  
                   | Content-Length    
                   | Content-Location  
                   | Content-MD5       
                   | Content-Range     
                   | Content-Type      
                   | Expires           
                   | Last-Modified

All of the `Content-` prefixed headers provide information about the structure, encoding and size of the message body. Some of these headers need to be present if the entity is part of the message.

The `Expires` header indicates a timestamp of whent he entity expires. Interestingly, a _"never expires"_ entity is sent with a timestamp of one year into the future. The `Last-Modified` header indicates the last modification timestamp for the entity.

&gt; Custom headers can also be created and sent by the client; they will be treated as entity headers by the HTTP protocol.

This is really an extension mechanism, and some client-server implementations may choose to communicate specifically over these extension headers. Although HTTP supports custom headers, what it really looks for are the request and response headers, which we cover next.

### Request Format

The request message has the same generic structure as above, except for the request line which looks like:
    
    
    Request-Line = Method SP URI SP HTTP-Version CRLF
    Method = "OPTIONS"
           | "HEAD"  
           | "GET"  
           | "POST"  
           | "PUT"  
           | "DELETE"  
           | "TRACE"

`SP` is the space separator between the tokens. `HTTP-Version` is specified as _"HTTP/1.1"_ and then followed by a new line. Thus, a typical request message might look like:
    
    
    GET /articles/http-basics HTTP/1.1
    Host: www.articles.com
    Connection: keep-alive
    Cache-Control: no-cache
    Pragma: no-cache
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8

Note the request line followed by many request headers. The **Host** header is mandatory for HTTP/1.1 clients. **GET** requests do not have a message body, but **POST** requests can contain the post data in the body.

The request headers act as modifiers of the request message. The complete list of known request headers is not too long, and is provided below. Unknown headers are treated as entity-header fields.
    
    
    request-header = Accept                   
                   | Accept-Charset    
                   | Accept-Encoding   
                   | Accept-Language   
                   | Authorization     
                   | Expect            
                   | From              
                   | Host              
                   | If-Match          
                   | If-Modified-Since 
                   | If-None-Match     
                   | If-Range          
                   | If-Unmodified-Since
                   | Max-Forwards       
                   | Proxy-Authorization
                   | Range              
                   | Referer            
                   | TE                 
                   | User-Agent

The `Accept` prefixed headers indicate the acceptable media-types, languages and character sets on the client. `From`, `Host`, `Referer` and `User-Agent` identify details about the client that initiated the request. The `If-` prefixed headers are used to make a request more conditional, and the server returns the resource only if the condition matches. Otherwise, it returns a `304 Not Modified`. The condition can be based on a timestamp or an ETag (a hash of the entity).

### Response Format

The response format is similar to the request message, except for the status line and headers. The status line has the following structure:
    
    
    Status-Line = HTTP-Version SP Status-Code SP Reason-Phrase CRLF

* HTTP-Version is sent as `HTTP/1.1`
* The Status-Code is one of the many statuses discussed earlier.
* The Reason-Phrase is a human-readable version of the status code. 

A typical status line for a successful response might look like so:
    
    
    HTTP/1.1 200 OK

The response headers are also fairly limited, and the full set is given below:
    
    
     response-header = Accept-Ranges
                     | Age
                     | ETag              
                     | Location          
                     | Proxy-Authenticate
                     | Retry-After       
                     | Server            
                     | Vary              
                     | WWW-Authenticate

* `Age` is the time in seconds since the message was generated on the server.
* `ETag` is the MD5 hash of the entity and used to check for modifications.
* `Location` is used when sending a redirection and contains the new URL.
* `Server` identifies the server generating the message.

It's been a lot of theory upto this point, so I won't blame you for drowsy eyes. In the next sections, we will get more practical and take a survey of the tools, frameworks and libraries.

* * *

## Tools to View HTTP Traffic

There are a number of tools available to monitor HTTP communication. Here, we list some of the more popular tools.

Undoubtedly, the [**Chrome/Webkit inspector][9]** is a favorite amongst web developers:

![][10]

There are also web debugging proxies, like [**Fiddler][6]** on Windows and [**Charles Proxy][7]** for OSX. My colleague, Rey Bango wrote an [excellent article][11] on this topic.

![Fiddler][12]![Charles Proxy][13]

For the command line, we have utilities like [curl][14], [tcpdump][15] and [tshark][16] for monitoring HTTP traffic.

* * *

## Using HTTP in Web Frameworks and Libraries

Now that we have looked at the request/response messages, it's time that we learn how libraries and frameworks expose it in the form of an API. We'll use _ExpressJS for Node_, _Ruby on Rails_, and _jQuery Ajax_ as our examples.

### ExpressJS

If you are building web servers in NodeJS, chances are high that you've considered [ExpressJS][17]. ExpressJS was originally inspired by a Ruby Web framework, called Sinatra. As expected, the API is also equally influenced.

Because we are dealing with a server-side framework, there are two primary tasks when dealing with HTTP messages:

* Read URL fragments and request headers.
* Write response headers and body

&gt; Understanding HTTP is crucial for having a clean, simple and RESTful interface between two endpoints.

ExpressJS provides a simple API for doing just that. We won't cover the details of the API. Instead, we will provide links to the detailed documentation on ExpressJS guides. The methods in the API are self-explanatory in most cases. A sampling of the request-related API is below:

On the way out to the client, ExpressJS provides the following response API:

* [res.status][18]: set an explicit status code.
* [res.set][19]: set a specific response header.
* [res.send][20]: send HTML, JSON or an octet-stream.
* [res.sendFile][21]: transfer a file to the client.
* [res.render][22]: render an express view template.
* [res.redirect][23]: redirect to a different route. Express automatically adds the default redirection code of 302.

### Ruby on Rails

&gt; The request and response messages are mostly the same, except for the first line and message headers.

In Rails, the [ActionController][24] and [ActionDispatch][24] modules provide the API for handling request and response messages.

**ActionController** provides a high level API to read the request URL, render output and redirect to a different end-point. An end-point (aka route) is handled as an action method. Most of the necessary context information inside an action-method is provided via the `request`, `response` and `params` objects.
* [params][25]: gives access to the URL parameters and POST data.
* [request][26]: contains information about the client, headers and URL.
* [response][27]: used to set headers and status codes.
* [render][28]: render views by expanding templates.
* [redirect_to][29]: redirect to a different action-method or URL.

**ActionDispatch** provides fine-grained access to the request/response messages, via the [`ActionDispatch::Request`][26] and [`ActionDispatch::Response`][27] classes. It exposes a set of query methods to check the type of request (`get?()`, `post?()`, `head?()`, `local?()`). Request headers can be directly accessed via the `request.headers()` method. 

On the response side, it provides methods to set `cookies()`, `location=()` and `status=()`. If you feel adventurous, you can also set the `body=()` and bypass the Rails rendering system.

### jQuery Ajax

Because jQuery is primarily a client-side library, its Ajax API provides the opposite of a server-side framework. In other words, it allows you to _read_ response messages and _modify_ request messages. jQuery exposes a simple API via [jQuery.ajax(settings)][30]:

By passing a `settings` object with the `beforeSend` callback, we can modify the request headers. The callback receives the jqXHR (jQuery XMLHttpRequest) object that exposes a method, called `setRequestHeader()` to set headers.
    
    
    $.ajax({
        url: 'http://www.articles.com/latest',
        type: 'GET',
        beforeSend: function (jqXHR) {
          jqXHR.setRequestHeader('Accepts-Language', 'en-US,en');
        }
      });

* The jqXHR object can also be used to read the response headers with the `jqXHR.getResponseHeader()`.
* If you want to take specific actions for various status codes, you can use the `statusCode` callback:
    
    
    $.ajax({
      statusCode: {
        404: function() {
          alert("page not found");
        }
      }
    });

* * *

## Summary

So that sums up our quick tour of the HTTP protocol.

&gt; We reviewed URL structure, verbs and status codes: the three pillars of HTTP communication.

The request and response messages are mostly the same, except for the first line and message headers. Finally, we reviewed how you can modify the request and response headers in web frameworks and libraries.

Understanding HTTP is crucial for having a clean, simple, and RESTful interface between two endpoints. On a larger scale, it also helps when designing your network infrastructure and providing a great experience to your end users.

In part two, we'll review connection handling, authentication and caching! See you then.

* * *

## References

[1]: http://www.w3.org/Protocols/rfc2616/rfc2616
[2]: https://studio.envato.com/explore/wordpress-installation/28116-express-http-error-fix
[3]: https://cms-assets.tutsplus.com/uploads/users/48/posts/16033/image/HTTP.png
[4]: https://cdn.tutsplus.com/net/authors/jeremymcpeak/http1-request-response.png
[5]: https://cdn.tutsplus.com/net/authors/jeremymcpeak/http1-url-structure.png
[6]: http://www.fiddler2.com/fiddler2/
[7]: http://www.charlesproxy.com/
[8]: https://cdn.tutsplus.com/net/authors/jeremymcpeak/http1-req-res-details.png
[9]: https://developers.google.com/chrome-developer-tools/
[10]: https://cdn.tutsplus.com/net/authors/jeremymcpeak/http1-chrome-inspector.png
[11]: http://net.tutsplus.com/tutorials/using-web-debugging-proxies/
[12]: https://cdn.tutsplus.com/net/authors/jeremymcpeak/http1-fiddler.jpg
[13]: https://cdn.tutsplus.com/net/authors/jeremymcpeak/http1-charles-proxy.png
[14]: http://curl.haxx.se/
[15]: http://www.tcpdump.org/
[16]: http://www.wireshark.org/docs/wsug_html_chunked/AppToolstshark.html
[17]: http://expressjs.com/
[18]: http://expressjs.com/api.html#res.status
[19]: http://expressjs.com/api.html#res.set
[20]: http://expressjs.com/api.html#res.send
[21]: http://expressjs.com/api.html#res.sendFile
[22]: http://expressjs.com/api.html#res.render
[23]: http://expressjs.com/api.html#res.redirect
[24]: http://api.rubyonrails.org
[25]: http://api.rubyonrails.org/classes/ActionController/Metal.html#method-i-params
[26]: http://api.rubyonrails.org/classes/ActionDispatch/Request.html
[27]: http://api.rubyonrails.org/classes/ActionDispatch/Response.html
[28]: http://api.rubyonrails.org/classes/AbstractController/Rendering.html#method-i-render
[29]: http://api.rubyonrails.org/classes/ActionController/Redirecting.html#method-i-redirect_to
[30]: http://api.jquery.com/jQuery.ajax/

  </message-header></start-line></message-body></message-header></start-line>
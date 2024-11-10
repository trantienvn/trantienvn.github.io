// Build: 19:06:48 10/11/2024
(() => {
    var __defProp = Object.defineProperty;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __publicField = (obj, key, value) => {
      __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
      return value;
    };
  
    // node_modules/@bufbuild/protobuf/dist/esm/private/assert.js
    function assert(condition, msg) {
      if (!condition) {
        throw new Error(msg);
      }
    }
    var FLOAT32_MAX = 34028234663852886e22;
    var FLOAT32_MIN = -34028234663852886e22;
    var UINT32_MAX = 4294967295;
    var INT32_MAX = 2147483647;
    var INT32_MIN = -2147483648;
    function assertInt32(arg) {
      if (typeof arg !== "number")
        throw new Error("invalid int 32: " + typeof arg);
      if (!Number.isInteger(arg) || arg > INT32_MAX || arg < INT32_MIN)
        throw new Error("invalid int 32: " + arg);
    }
    function assertUInt32(arg) {
      if (typeof arg !== "number")
        throw new Error("invalid uint 32: " + typeof arg);
      if (!Number.isInteger(arg) || arg > UINT32_MAX || arg < 0)
        throw new Error("invalid uint 32: " + arg);
    }
    function assertFloat32(arg) {
      if (typeof arg !== "number")
        throw new Error("invalid float 32: " + typeof arg);
      if (!Number.isFinite(arg))
        return;
      if (arg > FLOAT32_MAX || arg < FLOAT32_MIN)
        throw new Error("invalid float 32: " + arg);
    }
  
    // node_modules/@bufbuild/protobuf/dist/esm/private/enum.js
    var enumTypeSymbol = Symbol("@bufbuild/protobuf/enum-type");
    function getEnumType(enumObject) {
      const t = enumObject[enumTypeSymbol];
      assert(t, "missing enum type on enum object");
      return t;
    }
    function setEnumType(enumObject, typeName, values, opt) {
      enumObject[enumTypeSymbol] = makeEnumType(typeName, values.map((v) => ({
        no: v.no,
        name: v.name,
        localName: enumObject[v.no]
      })), opt);
    }
    function makeEnumType(typeName, values, _opt) {
      const names = /* @__PURE__ */ Object.create(null);
      const numbers = /* @__PURE__ */ Object.create(null);
      const normalValues = [];
      for (const value of values) {
        const n = normalizeEnumValue(value);
        normalValues.push(n);
        names[value.name] = n;
        numbers[value.no] = n;
      }
      return {
        typeName,
        values: normalValues,
        // We do not surface options at this time
        // options: opt?.options ?? Object.create(null),
        findName(name) {
          return names[name];
        },
        findNumber(no) {
          return numbers[no];
        }
      };
    }
    function makeEnum(typeName, values, opt) {
      const enumObject = {};
      for (const value of values) {
        const n = normalizeEnumValue(value);
        enumObject[n.localName] = n.no;
        enumObject[n.no] = n.localName;
      }
      setEnumType(enumObject, typeName, values, opt);
      return enumObject;
    }
    function normalizeEnumValue(value) {
      if ("localName" in value) {
        return value;
      }
      return Object.assign(Object.assign({}, value), { localName: value.name });
    }
  
    // node_modules/@bufbuild/protobuf/dist/esm/message.js
    var Message = class {
      /**
       * Compare with a message of the same type.
       */
      equals(other) {
        return this.getType().runtime.util.equals(this.getType(), this, other);
      }
      /**
       * Create a deep copy.
       */
      clone() {
        return this.getType().runtime.util.clone(this);
      }
      /**
       * Parse from binary data, merging fields.
       *
       * Repeated fields are appended. Map entries are added, overwriting
       * existing keys.
       *
       * If a message field is already present, it will be merged with the
       * new data.
       */
      fromBinary(bytes, options) {
        const type = this.getType(), format = type.runtime.bin, opt = format.makeReadOptions(options);
        format.readMessage(this, opt.readerFactory(bytes), bytes.byteLength, opt);
        return this;
      }
      /**
       * Parse a message from a JSON value.
       */
      fromJson(jsonValue, options) {
        const type = this.getType(), format = type.runtime.json, opt = format.makeReadOptions(options);
        format.readMessage(type, jsonValue, opt, this);
        return this;
      }
      /**
       * Parse a message from a JSON string.
       */
      fromJsonString(jsonString, options) {
        let json;
        try {
          json = JSON.parse(jsonString);
        } catch (e) {
          throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`);
        }
        return this.fromJson(json, options);
      }
      /**
       * Serialize the message to binary data.
       */
      toBinary(options) {
        const type = this.getType(), bin = type.runtime.bin, opt = bin.makeWriteOptions(options), writer = opt.writerFactory();
        bin.writeMessage(this, writer, opt);
        return writer.finish();
      }
      /**
       * Serialize the message to a JSON value, a JavaScript value that can be
       * passed to JSON.stringify().
       */
      toJson(options) {
        const type = this.getType(), json = type.runtime.json, opt = json.makeWriteOptions(options);
        return json.writeMessage(this, opt);
      }
      /**
       * Serialize the message to a JSON string.
       */
      toJsonString(options) {
        var _a;
        const value = this.toJson(options);
        return JSON.stringify(value, null, (_a = options === null || options === void 0 ? void 0 : options.prettySpaces) !== null && _a !== void 0 ? _a : 0);
      }
      /**
       * Override for serialization behavior. This will be invoked when calling
       * JSON.stringify on this message (i.e. JSON.stringify(msg)).
       *
       * Note that this will not serialize google.protobuf.Any with a packed
       * message because the protobuf JSON format specifies that it needs to be
       * unpacked, and this is only possible with a type registry to look up the
       * message type.  As a result, attempting to serialize a message with this
       * type will throw an Error.
       *
       * This method is protected because you should not need to invoke it
       * directly -- instead use JSON.stringify or toJsonString for
       * stringified JSON.  Alternatively, if actual JSON is desired, you should
       * use toJson.
       */
      toJSON() {
        return this.toJson({
          emitDefaultValues: true
        });
      }
      /**
       * Retrieve the MessageType of this message - a singleton that represents
       * the protobuf message declaration and provides metadata for reflection-
       * based operations.
       */
      getType() {
        return Object.getPrototypeOf(this).constructor;
      }
    };
  
    // node_modules/@bufbuild/protobuf/dist/esm/private/message-type.js
    function makeMessageType(runtime, typeName, fields, opt) {
      var _a;
      const localName = (_a = opt === null || opt === void 0 ? void 0 : opt.localName) !== null && _a !== void 0 ? _a : typeName.substring(typeName.lastIndexOf(".") + 1);
      const type = {
        [localName]: function(data) {
          runtime.util.initFields(this);
          runtime.util.initPartial(data, this);
        }
      }[localName];
      Object.setPrototypeOf(type.prototype, new Message());
      Object.assign(type, {
        runtime,
        typeName,
        fields: runtime.util.newFieldList(fields),
        fromBinary(bytes, options) {
          return new type().fromBinary(bytes, options);
        },
        fromJson(jsonValue, options) {
          return new type().fromJson(jsonValue, options);
        },
        fromJsonString(jsonString, options) {
          return new type().fromJsonString(jsonString, options);
        },
        equals(a, b) {
          return runtime.util.equals(type, a, b);
        }
      });
      return type;
    }
  
    // node_modules/@bufbuild/protobuf/dist/esm/field.js
    var ScalarType;
    (function(ScalarType2) {
      ScalarType2[ScalarType2["DOUBLE"] = 1] = "DOUBLE";
      ScalarType2[ScalarType2["FLOAT"] = 2] = "FLOAT";
      ScalarType2[ScalarType2["INT64"] = 3] = "INT64";
      ScalarType2[ScalarType2["UINT64"] = 4] = "UINT64";
      ScalarType2[ScalarType2["INT32"] = 5] = "INT32";
      ScalarType2[ScalarType2["FIXED64"] = 6] = "FIXED64";
      ScalarType2[ScalarType2["FIXED32"] = 7] = "FIXED32";
      ScalarType2[ScalarType2["BOOL"] = 8] = "BOOL";
      ScalarType2[ScalarType2["STRING"] = 9] = "STRING";
      ScalarType2[ScalarType2["BYTES"] = 12] = "BYTES";
      ScalarType2[ScalarType2["UINT32"] = 13] = "UINT32";
      ScalarType2[ScalarType2["SFIXED32"] = 15] = "SFIXED32";
      ScalarType2[ScalarType2["SFIXED64"] = 16] = "SFIXED64";
      ScalarType2[ScalarType2["SINT32"] = 17] = "SINT32";
      ScalarType2[ScalarType2["SINT64"] = 18] = "SINT64";
    })(ScalarType || (ScalarType = {}));
    var LongType;
    (function(LongType2) {
      LongType2[LongType2["BIGINT"] = 0] = "BIGINT";
      LongType2[LongType2["STRING"] = 1] = "STRING";
    })(LongType || (LongType = {}));
  
    // node_modules/@bufbuild/protobuf/dist/esm/google/varint.js
    function varint64read() {
      let lowBits = 0;
      let highBits = 0;
      for (let shift = 0; shift < 28; shift += 7) {
        let b = this.buf[this.pos++];
        lowBits |= (b & 127) << shift;
        if ((b & 128) == 0) {
          this.assertBounds();
          return [lowBits, highBits];
        }
      }
      let middleByte = this.buf[this.pos++];
      lowBits |= (middleByte & 15) << 28;
      highBits = (middleByte & 112) >> 4;
      if ((middleByte & 128) == 0) {
        this.assertBounds();
        return [lowBits, highBits];
      }
      for (let shift = 3; shift <= 31; shift += 7) {
        let b = this.buf[this.pos++];
        highBits |= (b & 127) << shift;
        if ((b & 128) == 0) {
          this.assertBounds();
          return [lowBits, highBits];
        }
      }
      throw new Error("invalid varint");
    }
    function varint64write(lo, hi, bytes) {
      for (let i = 0; i < 28; i = i + 7) {
        const shift = lo >>> i;
        const hasNext = !(shift >>> 7 == 0 && hi == 0);
        const byte = (hasNext ? shift | 128 : shift) & 255;
        bytes.push(byte);
        if (!hasNext) {
          return;
        }
      }
      const splitBits = lo >>> 28 & 15 | (hi & 7) << 4;
      const hasMoreBits = !(hi >> 3 == 0);
      bytes.push((hasMoreBits ? splitBits | 128 : splitBits) & 255);
      if (!hasMoreBits) {
        return;
      }
      for (let i = 3; i < 31; i = i + 7) {
        const shift = hi >>> i;
        const hasNext = !(shift >>> 7 == 0);
        const byte = (hasNext ? shift | 128 : shift) & 255;
        bytes.push(byte);
        if (!hasNext) {
          return;
        }
      }
      bytes.push(hi >>> 31 & 1);
    }
    var TWO_PWR_32_DBL = 4294967296;
    function int64FromString(dec) {
      const minus = dec[0] === "-";
      if (minus) {
        dec = dec.slice(1);
      }
      const base = 1e6;
      let lowBits = 0;
      let highBits = 0;
      function add1e6digit(begin, end) {
        const digit1e6 = Number(dec.slice(begin, end));
        highBits *= base;
        lowBits = lowBits * base + digit1e6;
        if (lowBits >= TWO_PWR_32_DBL) {
          highBits = highBits + (lowBits / TWO_PWR_32_DBL | 0);
          lowBits = lowBits % TWO_PWR_32_DBL;
        }
      }
      add1e6digit(-24, -18);
      add1e6digit(-18, -12);
      add1e6digit(-12, -6);
      add1e6digit(-6);
      return minus ? negate(lowBits, highBits) : newBits(lowBits, highBits);
    }
    function int64ToString(lo, hi) {
      let bits = newBits(lo, hi);
      const negative = bits.hi & 2147483648;
      if (negative) {
        bits = negate(bits.lo, bits.hi);
      }
      const result = uInt64ToString(bits.lo, bits.hi);
      return negative ? "-" + result : result;
    }
    function uInt64ToString(lo, hi) {
      ({ lo, hi } = toUnsigned(lo, hi));
      if (hi <= 2097151) {
        return String(TWO_PWR_32_DBL * hi + lo);
      }
      const low = lo & 16777215;
      const mid = (lo >>> 24 | hi << 8) & 16777215;
      const high = hi >> 16 & 65535;
      let digitA = low + mid * 6777216 + high * 6710656;
      let digitB = mid + high * 8147497;
      let digitC = high * 2;
      const base = 1e7;
      if (digitA >= base) {
        digitB += Math.floor(digitA / base);
        digitA %= base;
      }
      if (digitB >= base) {
        digitC += Math.floor(digitB / base);
        digitB %= base;
      }
      return digitC.toString() + decimalFrom1e7WithLeadingZeros(digitB) + decimalFrom1e7WithLeadingZeros(digitA);
    }
    function toUnsigned(lo, hi) {
      return { lo: lo >>> 0, hi: hi >>> 0 };
    }
    function newBits(lo, hi) {
      return { lo: lo | 0, hi: hi | 0 };
    }
    function negate(lowBits, highBits) {
      highBits = ~highBits;
      if (lowBits) {
        lowBits = ~lowBits + 1;
      } else {
        highBits += 1;
      }
      return newBits(lowBits, highBits);
    }
    var decimalFrom1e7WithLeadingZeros = (digit1e7) => {
      const partial = String(digit1e7);
      return "0000000".slice(partial.length) + partial;
    };
    function varint32write(value, bytes) {
      if (value >= 0) {
        while (value > 127) {
          bytes.push(value & 127 | 128);
          value = value >>> 7;
        }
        bytes.push(value);
      } else {
        for (let i = 0; i < 9; i++) {
          bytes.push(value & 127 | 128);
          value = value >> 7;
        }
        bytes.push(1);
      }
    }
    function varint32read() {
      let b = this.buf[this.pos++];
      let result = b & 127;
      if ((b & 128) == 0) {
        this.assertBounds();
        return result;
      }
      b = this.buf[this.pos++];
      result |= (b & 127) << 7;
      if ((b & 128) == 0) {
        this.assertBounds();
        return result;
      }
      b = this.buf[this.pos++];
      result |= (b & 127) << 14;
      if ((b & 128) == 0) {
        this.assertBounds();
        return result;
      }
      b = this.buf[this.pos++];
      result |= (b & 127) << 21;
      if ((b & 128) == 0) {
        this.assertBounds();
        return result;
      }
      b = this.buf[this.pos++];
      result |= (b & 15) << 28;
      for (let readBytes = 5; (b & 128) !== 0 && readBytes < 10; readBytes++)
        b = this.buf[this.pos++];
      if ((b & 128) != 0)
        throw new Error("invalid varint");
      this.assertBounds();
      return result >>> 0;
    }
  
    // node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js
    function makeInt64Support() {
      const dv = new DataView(new ArrayBuffer(8));
      const ok = typeof BigInt === "function" && typeof dv.getBigInt64 === "function" && typeof dv.getBigUint64 === "function" && typeof dv.setBigInt64 === "function" && typeof dv.setBigUint64 === "function" && (typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1");
      if (ok) {
        const MIN = BigInt("-9223372036854775808"), MAX = BigInt("9223372036854775807"), UMIN = BigInt("0"), UMAX = BigInt("18446744073709551615");
        return {
          zero: BigInt(0),
          supported: true,
          parse(value) {
            const bi = typeof value == "bigint" ? value : BigInt(value);
            if (bi > MAX || bi < MIN) {
              throw new Error(`int64 invalid: ${value}`);
            }
            return bi;
          },
          uParse(value) {
            const bi = typeof value == "bigint" ? value : BigInt(value);
            if (bi > UMAX || bi < UMIN) {
              throw new Error(`uint64 invalid: ${value}`);
            }
            return bi;
          },
          enc(value) {
            dv.setBigInt64(0, this.parse(value), true);
            return {
              lo: dv.getInt32(0, true),
              hi: dv.getInt32(4, true)
            };
          },
          uEnc(value) {
            dv.setBigInt64(0, this.uParse(value), true);
            return {
              lo: dv.getInt32(0, true),
              hi: dv.getInt32(4, true)
            };
          },
          dec(lo, hi) {
            dv.setInt32(0, lo, true);
            dv.setInt32(4, hi, true);
            return dv.getBigInt64(0, true);
          },
          uDec(lo, hi) {
            dv.setInt32(0, lo, true);
            dv.setInt32(4, hi, true);
            return dv.getBigUint64(0, true);
          }
        };
      }
      const assertInt64String = (value) => assert(/^-?[0-9]+$/.test(value), `int64 invalid: ${value}`);
      const assertUInt64String = (value) => assert(/^[0-9]+$/.test(value), `uint64 invalid: ${value}`);
      return {
        zero: "0",
        supported: false,
        parse(value) {
          if (typeof value != "string") {
            value = value.toString();
          }
          assertInt64String(value);
          return value;
        },
        uParse(value) {
          if (typeof value != "string") {
            value = value.toString();
          }
          assertUInt64String(value);
          return value;
        },
        enc(value) {
          if (typeof value != "string") {
            value = value.toString();
          }
          assertInt64String(value);
          return int64FromString(value);
        },
        uEnc(value) {
          if (typeof value != "string") {
            value = value.toString();
          }
          assertUInt64String(value);
          return int64FromString(value);
        },
        dec(lo, hi) {
          return int64ToString(lo, hi);
        },
        uDec(lo, hi) {
          return uInt64ToString(lo, hi);
        }
      };
    }
    var protoInt64 = makeInt64Support();
  
    // node_modules/@bufbuild/protobuf/dist/esm/binary-encoding.js
    var WireType;
    (function(WireType3) {
      WireType3[WireType3["Varint"] = 0] = "Varint";
      WireType3[WireType3["Bit64"] = 1] = "Bit64";
      WireType3[WireType3["LengthDelimited"] = 2] = "LengthDelimited";
      WireType3[WireType3["StartGroup"] = 3] = "StartGroup";
      WireType3[WireType3["EndGroup"] = 4] = "EndGroup";
      WireType3[WireType3["Bit32"] = 5] = "Bit32";
    })(WireType || (WireType = {}));
    var BinaryWriter = class {
      constructor(textEncoder) {
        this.stack = [];
        this.textEncoder = textEncoder !== null && textEncoder !== void 0 ? textEncoder : new TextEncoder();
        this.chunks = [];
        this.buf = [];
      }
      /**
       * Return all bytes written and reset this writer.
       */
      finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let len = 0;
        for (let i = 0; i < this.chunks.length; i++)
          len += this.chunks[i].length;
        let bytes = new Uint8Array(len);
        let offset = 0;
        for (let i = 0; i < this.chunks.length; i++) {
          bytes.set(this.chunks[i], offset);
          offset += this.chunks[i].length;
        }
        this.chunks = [];
        return bytes;
      }
      /**
       * Start a new fork for length-delimited data like a message
       * or a packed repeated field.
       *
       * Must be joined later with `join()`.
       */
      fork() {
        this.stack.push({ chunks: this.chunks, buf: this.buf });
        this.chunks = [];
        this.buf = [];
        return this;
      }
      /**
       * Join the last fork. Write its length and bytes, then
       * return to the previous state.
       */
      join() {
        let chunk = this.finish();
        let prev = this.stack.pop();
        if (!prev)
          throw new Error("invalid state, fork stack empty");
        this.chunks = prev.chunks;
        this.buf = prev.buf;
        this.uint32(chunk.byteLength);
        return this.raw(chunk);
      }
      /**
       * Writes a tag (field number and wire type).
       *
       * Equivalent to `uint32( (fieldNo << 3 | type) >>> 0 )`.
       *
       * Generated code should compute the tag ahead of time and call `uint32()`.
       */
      tag(fieldNo, type) {
        return this.uint32((fieldNo << 3 | type) >>> 0);
      }
      /**
       * Write a chunk of raw bytes.
       */
      raw(chunk) {
        if (this.buf.length) {
          this.chunks.push(new Uint8Array(this.buf));
          this.buf = [];
        }
        this.chunks.push(chunk);
        return this;
      }
      /**
       * Write a `uint32` value, an unsigned 32 bit varint.
       */
      uint32(value) {
        assertUInt32(value);
        while (value > 127) {
          this.buf.push(value & 127 | 128);
          value = value >>> 7;
        }
        this.buf.push(value);
        return this;
      }
      /**
       * Write a `int32` value, a signed 32 bit varint.
       */
      int32(value) {
        assertInt32(value);
        varint32write(value, this.buf);
        return this;
      }
      /**
       * Write a `bool` value, a variant.
       */
      bool(value) {
        this.buf.push(value ? 1 : 0);
        return this;
      }
      /**
       * Write a `bytes` value, length-delimited arbitrary data.
       */
      bytes(value) {
        this.uint32(value.byteLength);
        return this.raw(value);
      }
      /**
       * Write a `string` value, length-delimited data converted to UTF-8 text.
       */
      string(value) {
        let chunk = this.textEncoder.encode(value);
        this.uint32(chunk.byteLength);
        return this.raw(chunk);
      }
      /**
       * Write a `float` value, 32-bit floating point number.
       */
      float(value) {
        assertFloat32(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setFloat32(0, value, true);
        return this.raw(chunk);
      }
      /**
       * Write a `double` value, a 64-bit floating point number.
       */
      double(value) {
        let chunk = new Uint8Array(8);
        new DataView(chunk.buffer).setFloat64(0, value, true);
        return this.raw(chunk);
      }
      /**
       * Write a `fixed32` value, an unsigned, fixed-length 32-bit integer.
       */
      fixed32(value) {
        assertUInt32(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setUint32(0, value, true);
        return this.raw(chunk);
      }
      /**
       * Write a `sfixed32` value, a signed, fixed-length 32-bit integer.
       */
      sfixed32(value) {
        assertInt32(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setInt32(0, value, true);
        return this.raw(chunk);
      }
      /**
       * Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.
       */
      sint32(value) {
        assertInt32(value);
        value = (value << 1 ^ value >> 31) >>> 0;
        varint32write(value, this.buf);
        return this;
      }
      /**
       * Write a `fixed64` value, a signed, fixed-length 64-bit integer.
       */
      sfixed64(value) {
        let chunk = new Uint8Array(8), view = new DataView(chunk.buffer), tc = protoInt64.enc(value);
        view.setInt32(0, tc.lo, true);
        view.setInt32(4, tc.hi, true);
        return this.raw(chunk);
      }
      /**
       * Write a `fixed64` value, an unsigned, fixed-length 64 bit integer.
       */
      fixed64(value) {
        let chunk = new Uint8Array(8), view = new DataView(chunk.buffer), tc = protoInt64.uEnc(value);
        view.setInt32(0, tc.lo, true);
        view.setInt32(4, tc.hi, true);
        return this.raw(chunk);
      }
      /**
       * Write a `int64` value, a signed 64-bit varint.
       */
      int64(value) {
        let tc = protoInt64.enc(value);
        varint64write(tc.lo, tc.hi, this.buf);
        return this;
      }
      /**
       * Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
       */
      sint64(value) {
        let tc = protoInt64.enc(value), sign = tc.hi >> 31, lo = tc.lo << 1 ^ sign, hi = (tc.hi << 1 | tc.lo >>> 31) ^ sign;
        varint64write(lo, hi, this.buf);
        return this;
      }
      /**
       * Write a `uint64` value, an unsigned 64-bit varint.
       */
      uint64(value) {
        let tc = protoInt64.uEnc(value);
        varint64write(tc.lo, tc.hi, this.buf);
        return this;
      }
    };
    var BinaryReader = class {
      constructor(buf, textDecoder) {
        this.varint64 = varint64read;
        this.uint32 = varint32read;
        this.buf = buf;
        this.len = buf.length;
        this.pos = 0;
        this.view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
        this.textDecoder = textDecoder !== null && textDecoder !== void 0 ? textDecoder : new TextDecoder();
      }
      /**
       * Reads a tag - field number and wire type.
       */
      tag() {
        let tag = this.uint32(), fieldNo = tag >>> 3, wireType = tag & 7;
        if (fieldNo <= 0 || wireType < 0 || wireType > 5)
          throw new Error("illegal tag: field no " + fieldNo + " wire type " + wireType);
        return [fieldNo, wireType];
      }
      /**
       * Skip one element on the wire and return the skipped data.
       * Supports WireType.StartGroup since v2.0.0-alpha.23.
       */
      skip(wireType) {
        let start = this.pos;
        switch (wireType) {
          case WireType.Varint:
            while (this.buf[this.pos++] & 128) {
            }
            break;
          case WireType.Bit64:
            this.pos += 4;
          case WireType.Bit32:
            this.pos += 4;
            break;
          case WireType.LengthDelimited:
            let len = this.uint32();
            this.pos += len;
            break;
          case WireType.StartGroup:
            let t;
            while ((t = this.tag()[1]) !== WireType.EndGroup) {
              this.skip(t);
            }
            break;
          default:
            throw new Error("cant skip wire type " + wireType);
        }
        this.assertBounds();
        return this.buf.subarray(start, this.pos);
      }
      /**
       * Throws error if position in byte array is out of range.
       */
      assertBounds() {
        if (this.pos > this.len)
          throw new RangeError("premature EOF");
      }
      /**
       * Read a `int32` field, a signed 32 bit varint.
       */
      int32() {
        return this.uint32() | 0;
      }
      /**
       * Read a `sint32` field, a signed, zigzag-encoded 32-bit varint.
       */
      sint32() {
        let zze = this.uint32();
        return zze >>> 1 ^ -(zze & 1);
      }
      /**
       * Read a `int64` field, a signed 64-bit varint.
       */
      int64() {
        return protoInt64.dec(...this.varint64());
      }
      /**
       * Read a `uint64` field, an unsigned 64-bit varint.
       */
      uint64() {
        return protoInt64.uDec(...this.varint64());
      }
      /**
       * Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.
       */
      sint64() {
        let [lo, hi] = this.varint64();
        let s = -(lo & 1);
        lo = (lo >>> 1 | (hi & 1) << 31) ^ s;
        hi = hi >>> 1 ^ s;
        return protoInt64.dec(lo, hi);
      }
      /**
       * Read a `bool` field, a variant.
       */
      bool() {
        let [lo, hi] = this.varint64();
        return lo !== 0 || hi !== 0;
      }
      /**
       * Read a `fixed32` field, an unsigned, fixed-length 32-bit integer.
       */
      fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, true);
      }
      /**
       * Read a `sfixed32` field, a signed, fixed-length 32-bit integer.
       */
      sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, true);
      }
      /**
       * Read a `fixed64` field, an unsigned, fixed-length 64 bit integer.
       */
      fixed64() {
        return protoInt64.uDec(this.sfixed32(), this.sfixed32());
      }
      /**
       * Read a `fixed64` field, a signed, fixed-length 64-bit integer.
       */
      sfixed64() {
        return protoInt64.dec(this.sfixed32(), this.sfixed32());
      }
      /**
       * Read a `float` field, 32-bit floating point number.
       */
      float() {
        return this.view.getFloat32((this.pos += 4) - 4, true);
      }
      /**
       * Read a `double` field, a 64-bit floating point number.
       */
      double() {
        return this.view.getFloat64((this.pos += 8) - 8, true);
      }
      /**
       * Read a `bytes` field, length-delimited arbitrary data.
       */
      bytes() {
        let len = this.uint32(), start = this.pos;
        this.pos += len;
        this.assertBounds();
        return this.buf.subarray(start, start + len);
      }
      /**
       * Read a `string` field, length-delimited data converted to UTF-8 text.
       */
      string() {
        return this.textDecoder.decode(this.bytes());
      }
    };
  
    // node_modules/@bufbuild/protobuf/dist/esm/private/scalars.js
    function scalarEquals(type, a, b) {
      if (a === b) {
        return true;
      }
      if (type == ScalarType.BYTES) {
        if (!(a instanceof Uint8Array) || !(b instanceof Uint8Array)) {
          return false;
        }
        if (a.length !== b.length) {
          return false;
        }
        for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            return false;
          }
        }
        return true;
      }
      switch (type) {
        case ScalarType.UINT64:
        case ScalarType.FIXED64:
        case ScalarType.INT64:
        case ScalarType.SFIXED64:
        case ScalarType.SINT64:
          return a == b;
      }
      return false;
    }
    function scalarDefaultValue(type, longType) {
      switch (type) {
        case ScalarType.BOOL:
          return false;
        case ScalarType.UINT64:
        case ScalarType.FIXED64:
        case ScalarType.INT64:
        case ScalarType.SFIXED64:
        case ScalarType.SINT64:
          return longType == 0 ? protoInt64.zero : "0";
        case ScalarType.DOUBLE:
        case ScalarType.FLOAT:
          return 0;
        case ScalarType.BYTES:
          return new Uint8Array(0);
        case ScalarType.STRING:
          return "";
        default:
          return 0;
      }
    }
    function scalarTypeInfo(type, value) {
      const isUndefined = value === void 0;
      let wireType = WireType.Varint;
      let isIntrinsicDefault = value === 0;
      switch (type) {
        case ScalarType.STRING:
          isIntrinsicDefault = isUndefined || !value.length;
          wireType = WireType.LengthDelimited;
          break;
        case ScalarType.BOOL:
          isIntrinsicDefault = value === false;
          break;
        case ScalarType.DOUBLE:
          wireType = WireType.Bit64;
          break;
        case ScalarType.FLOAT:
          wireType = WireType.Bit32;
          break;
        case ScalarType.INT64:
          isIntrinsicDefault = isUndefined || value == 0;
          break;
        case ScalarType.UINT64:
          isIntrinsicDefault = isUndefined || value == 0;
          break;
        case ScalarType.FIXED64:
          isIntrinsicDefault = isUndefined || value == 0;
          wireType = WireType.Bit64;
          break;
        case ScalarType.BYTES:
          isIntrinsicDefault = isUndefined || !value.byteLength;
          wireType = WireType.LengthDelimited;
          break;
        case ScalarType.FIXED32:
          wireType = WireType.Bit32;
          break;
        case ScalarType.SFIXED32:
          wireType = WireType.Bit32;
          break;
        case ScalarType.SFIXED64:
          isIntrinsicDefault = isUndefined || value == 0;
          wireType = WireType.Bit64;
          break;
        case ScalarType.SINT64:
          isIntrinsicDefault = isUndefined || value == 0;
          break;
      }
      const method = ScalarType[type].toLowerCase();
      return [wireType, method, isUndefined || isIntrinsicDefault];
    }
  
    // node_modules/@bufbuild/protobuf/dist/esm/private/extensions.js
    function makeExtension(runtime, typeName, extendee, field) {
      let fi;
      return {
        typeName,
        extendee,
        get field() {
          if (!fi) {
            const i = typeof field == "function" ? field() : field;
            i.name = typeName.split(".").pop();
            i.jsonName = `[${typeName}]`;
            fi = runtime.util.newFieldList([i]).list()[0];
          }
          return fi;
        },
        runtime
      };
    }
    function createExtensionContainer(extension) {
      const localName = extension.field.localName;
      const container = /* @__PURE__ */ Object.create(null);
      container[localName] = initExtensionField(extension);
      return [container, () => container[localName]];
    }
    function initExtensionField(ext) {
      const field = ext.field;
      if (field.repeated) {
        return [];
      }
      if (field.default !== void 0) {
        return field.default;
      }
      switch (field.kind) {
        case "enum":
          return field.T.values[0].no;
        case "scalar":
          return scalarDefaultValue(field.T, field.L);
        case "message":
          const T = field.T, value = new T();
          return T.fieldWrapper ? T.fieldWrapper.unwrapField(value) : value;
        case "map":
          throw "map fields are not allowed to be extensions";
      }
    }
    function filterUnknownFields(unknownFields, field) {
      if (!field.repeated && (field.kind == "enum" || field.kind == "scalar")) {
        for (let i = unknownFields.length - 1; i >= 0; --i) {
          if (unknownFields[i].no == field.no) {
            return [unknownFields[i]];
          }
        }
        return [];
      }
      return unknownFields.filter((uf) => uf.no === field.no);
    }
  
    // node_modules/@bufbuild/protobuf/dist/esm/private/proto-runtime.js
    function makeProtoRuntime(syntax, json, bin, util) {
      return {
        syntax,
        json,
        bin,
        util,
        makeMessageType(typeName, fields, opt) {
          return makeMessageType(this, typeName, fields, opt);
        },
        makeEnum,
        makeEnumType,
        getEnumType,
        makeExtension(typeName, extendee, field) {
          return makeExtension(this, typeName, extendee, field);
        }
      };
    }
  
    // node_modules/@bufbuild/protobuf/dist/esm/private/field-wrapper.js
    function wrapField(type, value) {
      if (value instanceof Message || !type.fieldWrapper) {
        return value;
      }
      return type.fieldWrapper.wrapField(value);
    }
    var wktWrapperToScalarType = {
      "google.protobuf.DoubleValue": ScalarType.DOUBLE,
      "google.protobuf.FloatValue": ScalarType.FLOAT,
      "google.protobuf.Int64Value": ScalarType.INT64,
      "google.protobuf.UInt64Value": ScalarType.UINT64,
      "google.protobuf.Int32Value": ScalarType.INT32,
      "google.protobuf.UInt32Value": ScalarType.UINT32,
      "google.protobuf.BoolValue": ScalarType.BOOL,
      "google.protobuf.StringValue": ScalarType.STRING,
      "google.protobuf.BytesValue": ScalarType.BYTES
    };
  
    // node_modules/@bufbuild/protobuf/dist/esm/private/binary-format-common.js
    var unknownFieldsSymbol = Symbol("@bufbuild/protobuf/unknown-fields");
    var readDefaults = {
      readUnknownFields: true,
      readerFactory: (bytes) => new BinaryReader(bytes)
    };
    var writeDefaults = {
      writeUnknownFields: true,
      writerFactory: () => new BinaryWriter()
    };
    function makeReadOptions(options) {
      return options ? Object.assign(Object.assign({}, readDefaults), options) : readDefaults;
    }
    function makeWriteOptions(options) {
      return options ? Object.assign(Object.assign({}, writeDefaults), options) : writeDefaults;
    }
    function makeBinaryFormatCommon() {
      return {
        makeReadOptions,
        makeWriteOptions,
        listUnknownFields(message) {
          var _a;
          return (_a = message[unknownFieldsSymbol]) !== null && _a !== void 0 ? _a : [];
        },
        discardUnknownFields(message) {
          delete message[unknownFieldsSymbol];
        },
        writeUnknownFields(message, writer) {
          const m = message;
          const c = m[unknownFieldsSymbol];
          if (c) {
            for (const f of c) {
              writer.tag(f.no, f.wireType).raw(f.data);
            }
          }
        },
        onUnknownField(message, no, wireType, data) {
          const m = message;
          if (!Array.isArray(m[unknownFieldsSymbol])) {
            m[unknownFieldsSymbol] = [];
          }
          m[unknownFieldsSymbol].push({ no, wireType, data });
        },
        readMessage(message, reader, lengthOrEndTagFieldNo, options, delimitedMessageEncoding) {
          const type = message.getType();
          const end = delimitedMessageEncoding ? reader.len : reader.pos + lengthOrEndTagFieldNo;
          let fieldNo, wireType;
          while (reader.pos < end) {
            [fieldNo, wireType] = reader.tag();
            if (wireType == WireType.EndGroup) {
              break;
            }
            const field = type.fields.find(fieldNo);
            if (!field) {
              const data = reader.skip(wireType);
              if (options.readUnknownFields) {
                this.onUnknownField(message, fieldNo, wireType, data);
              }
              continue;
            }
            readField(message, reader, field, wireType, options);
          }
          if (delimitedMessageEncoding && // eslint-disable-line @typescript-eslint/strict-boolean-expressions
          (wireType != WireType.EndGroup || fieldNo !== lengthOrEndTagFieldNo)) {
            throw new Error(`invalid end group tag`);
          }
        },
        readField
      };
    }
    function readField(target, reader, field, wireType, options) {
      let { repeated, localName } = field;
      if (field.oneof) {
        target = target[field.oneof.localName];
        if (target.case != localName) {
          delete target.value;
        }
        target.case = localName;
        localName = "value";
      }
      switch (field.kind) {
        case "scalar":
        case "enum":
          const scalarType = field.kind == "enum" ? ScalarType.INT32 : field.T;
          let read = readScalar;
          if (field.kind == "scalar" && field.L > 0) {
            read = readScalarLTString;
          }
          if (repeated) {
            let arr = target[localName];
            const isPacked = wireType == WireType.LengthDelimited && scalarType != ScalarType.STRING && scalarType != ScalarType.BYTES;
            if (isPacked) {
              let e = reader.uint32() + reader.pos;
              while (reader.pos < e) {
                arr.push(read(reader, scalarType));
              }
            } else {
              arr.push(read(reader, scalarType));
            }
          } else {
            target[localName] = read(reader, scalarType);
          }
          break;
        case "message":
          const messageType = field.T;
          if (repeated) {
            target[localName].push(readMessageField(reader, new messageType(), options, field));
          } else {
            if (target[localName] instanceof Message) {
              readMessageField(reader, target[localName], options, field);
            } else {
              target[localName] = readMessageField(reader, new messageType(), options, field);
              if (messageType.fieldWrapper && !field.oneof && !field.repeated) {
                target[localName] = messageType.fieldWrapper.unwrapField(target[localName]);
              }
            }
          }
          break;
        case "map":
          let [mapKey, mapVal] = readMapEntry(field, reader, options);
          target[localName][mapKey] = mapVal;
          break;
      }
    }
    function readMessageField(reader, message, options, field) {
      const format = message.getType().runtime.bin;
      const delimited = field === null || field === void 0 ? void 0 : field.delimited;
      format.readMessage(
        message,
        reader,
        delimited ? field === null || field === void 0 ? void 0 : field.no : reader.uint32(),
        // eslint-disable-line @typescript-eslint/strict-boolean-expressions
        options,
        delimited
      );
      return message;
    }
    function readMapEntry(field, reader, options) {
      const length = reader.uint32(), end = reader.pos + length;
      let key, val;
      while (reader.pos < end) {
        let [fieldNo] = reader.tag();
        switch (fieldNo) {
          case 1:
            key = readScalar(reader, field.K);
            break;
          case 2:
            switch (field.V.kind) {
              case "scalar":
                val = readScalar(reader, field.V.T);
                break;
              case "enum":
                val = reader.int32();
                break;
              case "message":
                val = readMessageField(reader, new field.V.T(), options, void 0);
                break;
            }
            break;
        }
      }
      if (key === void 0) {
        let keyRaw = scalarDefaultValue(field.K, LongType.BIGINT);
        key = field.K == ScalarType.BOOL ? keyRaw.toString() : keyRaw;
      }
      if (typeof key != "string" && typeof key != "number") {
        key = key.toString();
      }
      if (val === void 0) {
        switch (field.V.kind) {
          case "scalar":
            val = scalarDefaultValue(field.V.T, LongType.BIGINT);
            break;
          case "enum":
            val = 0;
            break;
          case "message":
            val = new field.V.T();
            break;
        }
      }
      return [key, val];
    }
    function readScalarLTString(reader, type) {
      const v = readScalar(reader, type);
      return typeof v == "bigint" ? v.toString() : v;
    }
    function readScalar(reader, type) {
      switch (type) {
        case ScalarType.STRING:
          return reader.string();
        case ScalarType.BOOL:
          return reader.bool();
        case ScalarType.DOUBLE:
          return reader.double();
        case ScalarType.FLOAT:
          return reader.float();
        case ScalarType.INT32:
          return reader.int32();
        case ScalarType.INT64:
          return reader.int64();
        case ScalarType.UINT64:
          return reader.uint64();
        case ScalarType.FIXED64:
          return reader.fixed64();
        case ScalarType.BYTES:
          return reader.bytes();
        case ScalarType.FIXED32:
          return reader.fixed32();
        case ScalarType.SFIXED32:
          return reader.sfixed32();
        case ScalarType.SFIXED64:
          return reader.sfixed64();
        case ScalarType.SINT64:
          return reader.sint64();
        case ScalarType.UINT32:
          return reader.uint32();
        case ScalarType.SINT32:
          return reader.sint32();
      }
    }
    function writeMapEntry(writer, options, field, key, value) {
      writer.tag(field.no, WireType.LengthDelimited);
      writer.fork();
      let keyValue = key;
      switch (field.K) {
        case ScalarType.INT32:
        case ScalarType.FIXED32:
        case ScalarType.UINT32:
        case ScalarType.SFIXED32:
        case ScalarType.SINT32:
          keyValue = Number.parseInt(key);
          break;
        case ScalarType.BOOL:
          assert(key == "true" || key == "false");
          keyValue = key == "true";
          break;
      }
      writeScalar(writer, field.K, 1, keyValue, true);
      switch (field.V.kind) {
        case "scalar":
          writeScalar(writer, field.V.T, 2, value, true);
          break;
        case "enum":
          writeScalar(writer, ScalarType.INT32, 2, value, true);
          break;
        case "message":
          writer.tag(2, WireType.LengthDelimited).bytes(value.toBinary(options));
          break;
      }
      writer.join();
    }
    function writeMessageField(writer, options, field, value) {
      const message = wrapField(field.T, value);
      if (field === null || field === void 0 ? void 0 : field.delimited)
        writer.tag(field.no, WireType.StartGroup).raw(message.toBinary(options)).tag(field.no, WireType.EndGroup);
      else
        writer.tag(field.no, WireType.LengthDelimited).bytes(message.toBinary(options));
    }
    function writeScalar(writer, type, fieldNo, value, emitIntrinsicDefault) {
      let [wireType, method, isIntrinsicDefault] = scalarTypeInfo(type, value);
      if (!isIntrinsicDefault || emitIntrinsicDefault) {
        writer.tag(fieldNo, wireType)[method](value);
      }
    }
    function writePacked(writer, type, fieldNo, value) {
      if (!value.length) {
        return;
      }
      writer.tag(fieldNo, WireType.LengthDelimited).fork();
      let [, method] = scalarTypeInfo(type);
      for (let i = 0; i < value.length; i++) {
        writer[method](value[i]);
      }
      writer.join();
    }
  
    // node_modules/@bufbuild/protobuf/dist/esm/private/binary-format-proto3.js
    function makeBinaryFormatProto3() {
      return Object.assign(Object.assign({}, makeBinaryFormatCommon()), {
        writeField,
        writeMessage(message, writer, options) {
          const type = message.getType();
          for (const field of type.fields.byNumber()) {
            let value, localName = field.localName;
            if (field.oneof) {
              const oneof = message[field.oneof.localName];
              if (oneof.case !== localName) {
                continue;
              }
              value = oneof.value;
            } else {
              value = message[localName];
            }
            writeField(field, value, writer, options);
          }
          if (options.writeUnknownFields) {
            this.writeUnknownFields(message, writer);
          }
          return writer;
        }
      });
    }
    function writeField(field, value, writer, options) {
      const repeated = field.repeated;
      switch (field.kind) {
        case "scalar":
        case "enum":
          let scalarType = field.kind == "enum" ? ScalarType.INT32 : field.T;
          if (repeated) {
            if (field.packed) {
              writePacked(writer, scalarType, field.no, value);
            } else {
              for (const item of value) {
                writeScalar(writer, scalarType, field.no, item, true);
              }
            }
          } else if (value !== void 0) {
            writeScalar(writer, scalarType, field.no, value, !!field.oneof || field.opt);
          }
          break;
        case "message":
          if (repeated) {
            for (const item of value) {
              writeMessageField(writer, options, field, item);
            }
          } else if (value !== void 0) {
            writeMessageField(writer, options, field, value);
          }
          break;
        case "map":
          for (const [key, val] of Object.entries(value)) {
            writeMapEntry(writer, options, field, key, val);
          }
          break;
      }
    }
  
    // node_modules/@bufbuild/protobuf/dist/esm/proto-base64.js
    var encTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    var decTable = [];
    for (let i = 0; i < encTable.length; i++)
      decTable[encTable[i].charCodeAt(0)] = i;
    decTable["-".charCodeAt(0)] = encTable.indexOf("+");
    decTable["_".charCodeAt(0)] = encTable.indexOf("/");
    var protoBase64 = {
      /**
       * Decodes a base64 string to a byte array.
       *
       * - ignores white-space, including line breaks and tabs
       * - allows inner padding (can decode concatenated base64 strings)
       * - does not require padding
       * - understands base64url encoding:
       *   "-" instead of "+",
       *   "_" instead of "/",
       *   no padding
       */
      dec(base64Str) {
        let es = base64Str.length * 3 / 4;
        if (base64Str[base64Str.length - 2] == "=")
          es -= 2;
        else if (base64Str[base64Str.length - 1] == "=")
          es -= 1;
        let bytes = new Uint8Array(es), bytePos = 0, groupPos = 0, b, p = 0;
        for (let i = 0; i < base64Str.length; i++) {
          b = decTable[base64Str.charCodeAt(i)];
          if (b === void 0) {
            switch (base64Str[i]) {
              case "=":
                groupPos = 0;
              case "\n":
              case "\r":
              case "	":
              case " ":
                continue;
              default:
                throw Error("invalid base64 string.");
            }
          }
          switch (groupPos) {
            case 0:
              p = b;
              groupPos = 1;
              break;
            case 1:
              bytes[bytePos++] = p << 2 | (b & 48) >> 4;
              p = b;
              groupPos = 2;
              break;
            case 2:
              bytes[bytePos++] = (p & 15) << 4 | (b & 60) >> 2;
              p = b;
              groupPos = 3;
              break;
            case 3:
              bytes[bytePos++] = (p & 3) << 6 | b;
              groupPos = 0;
              break;
          }
        }
        if (groupPos == 1)
          throw Error("invalid base64 string.");
        return bytes.subarray(0, bytePos);
      },
      /**
       * Encode a byte array to a base64 string.
       */
      enc(bytes) {
        let base64 = "", groupPos = 0, b, p = 0;
        for (let i = 0; i < bytes.length; i++) {
          b = bytes[i];
          switch (groupPos) {
            case 0:
              base64 += encTable[b >> 2];
              p = (b & 3) << 4;
              groupPos = 1;
              break;
            case 1:
              base64 += encTable[p | b >> 4];
              p = (b & 15) << 2;
              groupPos = 2;
              break;
            case 2:
              base64 += encTable[p | b >> 6];
              base64 += encTable[b & 63];
              groupPos = 0;
              break;
          }
        }
        if (groupPos) {
          base64 += encTable[p];
          base64 += "=";
          if (groupPos == 1)
            base64 += "=";
        }
        return base64;
      }
    };
  
    // node_modules/@bufbuild/protobuf/dist/esm/extension-accessor.js
    function getExtension(message, extension, options) {
      assertExtendee(extension, message);
      const opt = extension.runtime.bin.makeReadOptions(options);
      const ufs = filterUnknownFields(message.getType().runtime.bin.listUnknownFields(message), extension.field);
      const [container, get] = createExtensionContainer(extension);
      for (const uf of ufs) {
        extension.runtime.bin.readField(container, opt.readerFactory(uf.data), extension.field, uf.wireType, opt);
      }
      return get();
    }
    function setExtension(message, extension, value, options) {
      assertExtendee(extension, message);
      const readOpt = extension.runtime.bin.makeReadOptions(options);
      const writeOpt = extension.runtime.bin.makeWriteOptions(options);
      if (hasExtension(message, extension)) {
        const ufs = message.getType().runtime.bin.listUnknownFields(message).filter((uf) => uf.no != extension.field.no);
        message.getType().runtime.bin.discardUnknownFields(message);
        for (const uf of ufs) {
          message.getType().runtime.bin.onUnknownField(message, uf.no, uf.wireType, uf.data);
        }
      }
      const writer = writeOpt.writerFactory();
      let f = extension.field;
      if (!f.opt && !f.repeated && (f.kind == "enum" || f.kind == "scalar")) {
        f = Object.assign(Object.assign({}, extension.field), { opt: true });
      }
      extension.runtime.bin.writeField(f, value, writer, writeOpt);
      const reader = readOpt.readerFactory(writer.finish());
      while (reader.pos < reader.len) {
        const [no, wireType] = reader.tag();
        const data = reader.skip(wireType);
        message.getType().runtime.bin.onUnknownField(message, no, wireType, data);
      }
    }
    function hasExtension(message, extension) {
      const messageType = message.getType();
      return extension.extendee.typeName === messageType.typeName && !!messageType.runtime.bin.listUnknownFields(message).find((uf) => uf.no == extension.field.no);
    }
    function assertExtendee(extension, message) {
      assert(extension.extendee.typeName == message.getType().typeName, `extension ${extension.typeName} can only be applied to message ${extension.extendee.typeName}`);
    }
  
    // node_modules/@bufbuild/protobuf/dist/esm/private/json-format-common.js
    var jsonReadDefaults = {
      ignoreUnknownFields: false
    };
    var jsonWriteDefaults = {
      emitDefaultValues: false,
      enumAsInteger: false,
      useProtoFieldName: false,
      prettySpaces: 0
    };
    function makeReadOptions2(options) {
      return options ? Object.assign(Object.assign({}, jsonReadDefaults), options) : jsonReadDefaults;
    }
    function makeWriteOptions2(options) {
      return options ? Object.assign(Object.assign({}, jsonWriteDefaults), options) : jsonWriteDefaults;
    }
    function makeJsonFormatCommon(nullAsZeroValue, makeWriteField) {
      const writeField2 = makeWriteField(writeEnum, writeScalar2);
      return {
        makeReadOptions: makeReadOptions2,
        makeWriteOptions: makeWriteOptions2,
        readMessage(type, json, options, message) {
          if (json == null || Array.isArray(json) || typeof json != "object") {
            throw new Error(`cannot decode message ${type.typeName} from JSON: ${debugJsonValue(json)}`);
          }
          message = message !== null && message !== void 0 ? message : new type();
          const oneofSeen = /* @__PURE__ */ new Map();
          const registry = options.typeRegistry;
          for (const [jsonKey, jsonValue] of Object.entries(json)) {
            const field = type.fields.findJsonName(jsonKey);
            if (field) {
              if (field.oneof) {
                if (jsonValue === null && field.kind == "scalar") {
                  continue;
                }
                const seen = oneofSeen.get(field.oneof);
                if (seen !== void 0) {
                  throw new Error(`cannot decode message ${type.typeName} from JSON: multiple keys for oneof "${field.oneof.name}" present: "${seen}", "${jsonKey}"`);
                }
                oneofSeen.set(field.oneof, jsonKey);
              }
              readField2(message, jsonValue, field, options, type, nullAsZeroValue);
            } else {
              let found = false;
              if ((registry === null || registry === void 0 ? void 0 : registry.findExtension) && jsonKey.startsWith("[") && jsonKey.endsWith("]")) {
                const ext = registry.findExtension(jsonKey.substring(1, jsonKey.length - 1));
                if (ext && ext.extendee.typeName == type.typeName) {
                  found = true;
                  const [container, get] = createExtensionContainer(ext);
                  readField2(container, jsonValue, ext.field, options, ext, true);
                  setExtension(message, ext, get(), options);
                }
              }
              if (!found && !options.ignoreUnknownFields) {
                throw new Error(`cannot decode message ${type.typeName} from JSON: key "${jsonKey}" is unknown`);
              }
            }
          }
          return message;
        },
        writeMessage(message, options) {
          const type = message.getType();
          const json = {};
          let field;
          try {
            for (const member of type.fields.byMember()) {
              let jsonValue;
              if (member.kind == "oneof") {
                const oneof = message[member.localName];
                if (oneof.value === void 0) {
                  continue;
                }
                field = member.findField(oneof.case);
                if (!field) {
                  throw "oneof case not found: " + oneof.case;
                }
                jsonValue = writeField2(field, oneof.value, options);
              } else {
                field = member;
                jsonValue = writeField2(field, message[field.localName], options);
              }
              if (jsonValue !== void 0) {
                json[options.useProtoFieldName ? field.name : field.jsonName] = jsonValue;
              }
            }
            const registry = options.typeRegistry;
            if (registry === null || registry === void 0 ? void 0 : registry.findExtensionFor) {
              for (const uf of type.runtime.bin.listUnknownFields(message)) {
                const ext = registry.findExtensionFor(type.typeName, uf.no);
                if (ext && hasExtension(message, ext)) {
                  const value = getExtension(message, ext, options);
                  const jsonValue = writeField2(ext.field, value, options);
                  if (jsonValue !== void 0) {
                    json[ext.field.jsonName] = jsonValue;
                  }
                }
              }
            }
          } catch (e) {
            const m = field ? `cannot encode field ${type.typeName}.${field.name} to JSON` : `cannot encode message ${type.typeName} to JSON`;
            const r = e instanceof Error ? e.message : String(e);
            throw new Error(m + (r.length > 0 ? `: ${r}` : ""));
          }
          return json;
        },
        readScalar: (type, json, longType) => readScalar2(type, json, longType, nullAsZeroValue),
        // eslint-disable-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return
        writeScalar: writeScalar2,
        debug: debugJsonValue
      };
    }
    function debugJsonValue(json) {
      if (json === null) {
        return "null";
      }
      switch (typeof json) {
        case "object":
          return Array.isArray(json) ? "array" : "object";
        case "string":
          return json.length > 100 ? "string" : `"${json.split('"').join('\\"')}"`;
        default:
          return String(json);
      }
    }
    function readField2(target, jsonValue, field, options, type, nullAsZeroValue) {
      let localName = field.localName;
      if (field.oneof) {
        if (jsonValue === null && field.kind == "scalar") {
          return;
        }
        target = target[field.oneof.localName] = { case: localName };
        localName = "value";
      }
      if (field.repeated) {
        if (jsonValue === null) {
          return;
        }
        if (!Array.isArray(jsonValue)) {
          throw new Error(`cannot decode field ${type.typeName}.${field.name} from JSON: ${debugJsonValue(jsonValue)}`);
        }
        const targetArray = target[localName];
        for (const jsonItem of jsonValue) {
          if (jsonItem === null) {
            throw new Error(`cannot decode field ${type.typeName}.${field.name} from JSON: ${debugJsonValue(jsonItem)}`);
          }
          let val;
          switch (field.kind) {
            case "message":
              val = field.T.fromJson(jsonItem, options);
              break;
            case "enum":
              val = readEnum(field.T, jsonItem, options.ignoreUnknownFields, true);
              if (val === void 0)
                continue;
              break;
            case "scalar":
              try {
                val = readScalar2(field.T, jsonItem, field.L, true);
              } catch (e) {
                let m = `cannot decode field ${type.typeName}.${field.name} from JSON: ${debugJsonValue(jsonItem)}`;
                if (e instanceof Error && e.message.length > 0) {
                  m += `: ${e.message}`;
                }
                throw new Error(m);
              }
              break;
          }
          targetArray.push(val);
        }
      } else if (field.kind == "map") {
        if (jsonValue === null) {
          return;
        }
        if (typeof jsonValue != "object" || Array.isArray(jsonValue)) {
          throw new Error(`cannot decode field ${type.typeName}.${field.name} from JSON: ${debugJsonValue(jsonValue)}`);
        }
        const targetMap = target[localName];
        for (const [jsonMapKey, jsonMapValue] of Object.entries(jsonValue)) {
          if (jsonMapValue === null) {
            throw new Error(`cannot decode field ${type.typeName}.${field.name} from JSON: map value null`);
          }
          let val;
          switch (field.V.kind) {
            case "message":
              val = field.V.T.fromJson(jsonMapValue, options);
              break;
            case "enum":
              val = readEnum(field.V.T, jsonMapValue, options.ignoreUnknownFields, true);
              if (val === void 0)
                continue;
              break;
            case "scalar":
              try {
                val = readScalar2(field.V.T, jsonMapValue, LongType.BIGINT, true);
              } catch (e) {
                let m = `cannot decode map value for field ${type.typeName}.${field.name} from JSON: ${debugJsonValue(jsonValue)}`;
                if (e instanceof Error && e.message.length > 0) {
                  m += `: ${e.message}`;
                }
                throw new Error(m);
              }
              break;
          }
          try {
            targetMap[readScalar2(field.K, field.K == ScalarType.BOOL ? jsonMapKey == "true" ? true : jsonMapKey == "false" ? false : jsonMapKey : jsonMapKey, LongType.BIGINT, true).toString()] = val;
          } catch (e) {
            let m = `cannot decode map key for field ${type.typeName}.${field.name} from JSON: ${debugJsonValue(jsonValue)}`;
            if (e instanceof Error && e.message.length > 0) {
              m += `: ${e.message}`;
            }
            throw new Error(m);
          }
        }
      } else {
        switch (field.kind) {
          case "message":
            const messageType = field.T;
            if (jsonValue === null && messageType.typeName != "google.protobuf.Value") {
              if (field.oneof) {
                throw new Error(`cannot decode field ${type.typeName}.${field.name} from JSON: null is invalid for oneof field`);
              }
              return;
            }
            if (target[localName] instanceof Message) {
              target[localName].fromJson(jsonValue, options);
            } else {
              target[localName] = messageType.fromJson(jsonValue, options);
              if (messageType.fieldWrapper && !field.oneof) {
                target[localName] = messageType.fieldWrapper.unwrapField(target[localName]);
              }
            }
            break;
          case "enum":
            const enumValue = readEnum(field.T, jsonValue, options.ignoreUnknownFields, nullAsZeroValue);
            if (enumValue !== void 0) {
              target[localName] = enumValue;
            }
            break;
          case "scalar":
            try {
              target[localName] = readScalar2(field.T, jsonValue, field.L, nullAsZeroValue);
            } catch (e) {
              let m = `cannot decode field ${type.typeName}.${field.name} from JSON: ${debugJsonValue(jsonValue)}`;
              if (e instanceof Error && e.message.length > 0) {
                m += `: ${e.message}`;
              }
              throw new Error(m);
            }
            break;
        }
      }
    }
    function readScalar2(type, json, longType, nullAsZeroValue) {
      switch (type) {
        case ScalarType.DOUBLE:
        case ScalarType.FLOAT:
          if (json === null)
            return nullAsZeroValue ? 0 : void 0;
          if (json === "NaN")
            return Number.NaN;
          if (json === "Infinity")
            return Number.POSITIVE_INFINITY;
          if (json === "-Infinity")
            return Number.NEGATIVE_INFINITY;
          if (json === "") {
            break;
          }
          if (typeof json == "string" && json.trim().length !== json.length) {
            break;
          }
          if (typeof json != "string" && typeof json != "number") {
            break;
          }
          const float = Number(json);
          if (Number.isNaN(float)) {
            break;
          }
          if (!Number.isFinite(float)) {
            break;
          }
          if (type == ScalarType.FLOAT)
            assertFloat32(float);
          return float;
        case ScalarType.INT32:
        case ScalarType.FIXED32:
        case ScalarType.SFIXED32:
        case ScalarType.SINT32:
        case ScalarType.UINT32:
          if (json === null)
            return nullAsZeroValue ? 0 : void 0;
          let int32;
          if (typeof json == "number")
            int32 = json;
          else if (typeof json == "string" && json.length > 0) {
            if (json.trim().length === json.length)
              int32 = Number(json);
          }
          if (int32 === void 0)
            break;
          if (type == ScalarType.UINT32)
            assertUInt32(int32);
          else
            assertInt32(int32);
          return int32;
        case ScalarType.INT64:
        case ScalarType.SFIXED64:
        case ScalarType.SINT64:
          if (json === null)
            return nullAsZeroValue ? protoInt64.zero : void 0;
          if (typeof json != "number" && typeof json != "string")
            break;
          const long = protoInt64.parse(json);
          return longType ? long.toString() : long;
        case ScalarType.FIXED64:
        case ScalarType.UINT64:
          if (json === null)
            return nullAsZeroValue ? protoInt64.zero : void 0;
          if (typeof json != "number" && typeof json != "string")
            break;
          const uLong = protoInt64.uParse(json);
          return longType ? uLong.toString() : uLong;
        case ScalarType.BOOL:
          if (json === null)
            return nullAsZeroValue ? false : void 0;
          if (typeof json !== "boolean")
            break;
          return json;
        case ScalarType.STRING:
          if (json === null)
            return nullAsZeroValue ? "" : void 0;
          if (typeof json !== "string") {
            break;
          }
          try {
            encodeURIComponent(json);
          } catch (e) {
            throw new Error("invalid UTF8");
          }
          return json;
        case ScalarType.BYTES:
          if (json === null)
            return nullAsZeroValue ? new Uint8Array(0) : void 0;
          if (json === "")
            return new Uint8Array(0);
          if (typeof json !== "string")
            break;
          return protoBase64.dec(json);
      }
      throw new Error();
    }
    function readEnum(type, json, ignoreUnknownFields, nullAsZeroValue) {
      if (json === null) {
        return nullAsZeroValue ? type.values[0].no : void 0;
      }
      switch (typeof json) {
        case "number":
          if (Number.isInteger(json)) {
            return json;
          }
          break;
        case "string":
          const value = type.findName(json);
          if (value || ignoreUnknownFields) {
            return value === null || value === void 0 ? void 0 : value.no;
          }
          break;
      }
      throw new Error(`cannot decode enum ${type.typeName} from JSON: ${debugJsonValue(json)}`);
    }
    function writeEnum(type, value, emitZeroValue, enumAsInteger) {
      var _a;
      if (value === void 0) {
        return value;
      }
      if (!emitZeroValue && type.values[0].no === value) {
        return void 0;
      }
      if (enumAsInteger) {
        return value;
      }
      if (type.typeName == "google.protobuf.NullValue") {
        return null;
      }
      const val = type.findNumber(value);
      return (_a = val === null || val === void 0 ? void 0 : val.name) !== null && _a !== void 0 ? _a : value;
    }
    function writeScalar2(type, value, emitZeroValue) {
      if (value === void 0) {
        return void 0;
      }
      switch (type) {
        case ScalarType.INT32:
        case ScalarType.SFIXED32:
        case ScalarType.SINT32:
        case ScalarType.FIXED32:
        case ScalarType.UINT32:
          assert(typeof value == "number");
          return value != 0 || emitZeroValue ? value : void 0;
        case ScalarType.FLOAT:
        case ScalarType.DOUBLE:
          assert(typeof value == "number");
          if (Number.isNaN(value))
            return "NaN";
          if (value === Number.POSITIVE_INFINITY)
            return "Infinity";
          if (value === Number.NEGATIVE_INFINITY)
            return "-Infinity";
          return value !== 0 || emitZeroValue ? value : void 0;
        case ScalarType.STRING:
          assert(typeof value == "string");
          return value.length > 0 || emitZeroValue ? value : void 0;
        case ScalarType.BOOL:
          assert(typeof value == "boolean");
          return value || emitZeroValue ? value : void 0;
        case ScalarType.UINT64:
        case ScalarType.FIXED64:
        case ScalarType.INT64:
        case ScalarType.SFIXED64:
        case ScalarType.SINT64:
          assert(typeof value == "bigint" || typeof value == "string" || typeof value == "number");
          return emitZeroValue || value != 0 ? value.toString(10) : void 0;
        case ScalarType.BYTES:
          assert(value instanceof Uint8Array);
          return emitZeroValue || value.byteLength > 0 ? protoBase64.enc(value) : void 0;
      }
    }
  
    // node_modules/@bufbuild/protobuf/dist/esm/private/json-format-proto3.js
    function makeJsonFormatProto3() {
      return makeJsonFormatCommon(true, (writeEnum2, writeScalar3) => {
        return function writeField2(field, value, options) {
          if (field.kind == "map") {
            const jsonObj = {};
            switch (field.V.kind) {
              case "scalar":
                for (const [entryKey, entryValue] of Object.entries(value)) {
                  const val = writeScalar3(field.V.T, entryValue, true);
                  assert(val !== void 0);
                  jsonObj[entryKey.toString()] = val;
                }
                break;
              case "message":
                for (const [entryKey, entryValue] of Object.entries(value)) {
                  jsonObj[entryKey.toString()] = entryValue.toJson(options);
                }
                break;
              case "enum":
                const enumType = field.V.T;
                for (const [entryKey, entryValue] of Object.entries(value)) {
                  assert(entryValue === void 0 || typeof entryValue == "number");
                  const val = writeEnum2(enumType, entryValue, true, options.enumAsInteger);
                  assert(val !== void 0);
                  jsonObj[entryKey.toString()] = val;
                }
                break;
            }
            return options.emitDefaultValues || Object.keys(jsonObj).length > 0 ? jsonObj : void 0;
          } else if (field.repeated) {
            const jsonArr = [];
            switch (field.kind) {
              case "scalar":
                for (let i = 0; i < value.length; i++) {
                  jsonArr.push(writeScalar3(field.T, value[i], true));
                }
                break;
              case "enum":
                for (let i = 0; i < value.length; i++) {
                  jsonArr.push(writeEnum2(field.T, value[i], true, options.enumAsInteger));
                }
                break;
              case "message":
                for (let i = 0; i < value.length; i++) {
                  jsonArr.push(value[i].toJson(options));
                }
                break;
            }
            return options.emitDefaultValues || jsonArr.length > 0 ? jsonArr : void 0;
          } else {
            if (value === void 0) {
              return void 0;
            }
            switch (field.kind) {
              case "scalar":
                return writeScalar3(field.T, value, !!field.oneof || field.opt || options.emitDefaultValues);
              case "enum":
                return writeEnum2(field.T, value, !!field.oneof || field.opt || options.emitDefaultValues, options.enumAsInteger);
              case "message":
                return wrapField(field.T, value).toJson(options);
            }
          }
        };
      });
    }
  
    // node_modules/@bufbuild/protobuf/dist/esm/private/util-common.js
    function makeUtilCommon() {
      return {
        setEnumType,
        initPartial(source, target) {
          if (source === void 0) {
            return;
          }
          const type = target.getType();
          for (const member of type.fields.byMember()) {
            const localName = member.localName, t = target, s = source;
            if (s[localName] === void 0) {
              continue;
            }
            switch (member.kind) {
              case "oneof":
                const sk = s[localName].case;
                if (sk === void 0) {
                  continue;
                }
                const sourceField = member.findField(sk);
                let val = s[localName].value;
                if (sourceField && sourceField.kind == "message" && !(val instanceof sourceField.T)) {
                  val = new sourceField.T(val);
                } else if (sourceField && sourceField.kind === "scalar" && sourceField.T === ScalarType.BYTES) {
                  val = toU8Arr(val);
                }
                t[localName] = { case: sk, value: val };
                break;
              case "scalar":
              case "enum":
                let copy = s[localName];
                if (member.T === ScalarType.BYTES) {
                  copy = member.repeated ? copy.map(toU8Arr) : toU8Arr(copy);
                }
                t[localName] = copy;
                break;
              case "map":
                switch (member.V.kind) {
                  case "scalar":
                  case "enum":
                    if (member.V.T === ScalarType.BYTES) {
                      for (const [k, v] of Object.entries(s[localName])) {
                        t[localName][k] = toU8Arr(v);
                      }
                    } else {
                      Object.assign(t[localName], s[localName]);
                    }
                    break;
                  case "message":
                    const messageType = member.V.T;
                    for (const k of Object.keys(s[localName])) {
                      let val2 = s[localName][k];
                      if (!messageType.fieldWrapper) {
                        val2 = new messageType(val2);
                      }
                      t[localName][k] = val2;
                    }
                    break;
                }
                break;
              case "message":
                const mt = member.T;
                if (member.repeated) {
                  t[localName] = s[localName].map((val2) => val2 instanceof mt ? val2 : new mt(val2));
                } else if (s[localName] !== void 0) {
                  const val2 = s[localName];
                  if (mt.fieldWrapper) {
                    if (
                      // We can't use BytesValue.typeName as that will create a circular import
                      mt.typeName === "google.protobuf.BytesValue"
                    ) {
                      t[localName] = toU8Arr(val2);
                    } else {
                      t[localName] = val2;
                    }
                  } else {
                    t[localName] = val2 instanceof mt ? val2 : new mt(val2);
                  }
                }
                break;
            }
          }
        },
        equals(type, a, b) {
          if (a === b) {
            return true;
          }
          if (!a || !b) {
            return false;
          }
          return type.fields.byMember().every((m) => {
            const va = a[m.localName];
            const vb = b[m.localName];
            if (m.repeated) {
              if (va.length !== vb.length) {
                return false;
              }
              switch (m.kind) {
                case "message":
                  return va.every((a2, i) => m.T.equals(a2, vb[i]));
                case "scalar":
                  return va.every((a2, i) => scalarEquals(m.T, a2, vb[i]));
                case "enum":
                  return va.every((a2, i) => scalarEquals(ScalarType.INT32, a2, vb[i]));
              }
              throw new Error(`repeated cannot contain ${m.kind}`);
            }
            switch (m.kind) {
              case "message":
                return m.T.equals(va, vb);
              case "enum":
                return scalarEquals(ScalarType.INT32, va, vb);
              case "scalar":
                return scalarEquals(m.T, va, vb);
              case "oneof":
                if (va.case !== vb.case) {
                  return false;
                }
                const s = m.findField(va.case);
                if (s === void 0) {
                  return true;
                }
                switch (s.kind) {
                  case "message":
                    return s.T.equals(va.value, vb.value);
                  case "enum":
                    return scalarEquals(ScalarType.INT32, va.value, vb.value);
                  case "scalar":
                    return scalarEquals(s.T, va.value, vb.value);
                }
                throw new Error(`oneof cannot contain ${s.kind}`);
              case "map":
                const keys = Object.keys(va).concat(Object.keys(vb));
                switch (m.V.kind) {
                  case "message":
                    const messageType = m.V.T;
                    return keys.every((k) => messageType.equals(va[k], vb[k]));
                  case "enum":
                    return keys.every((k) => scalarEquals(ScalarType.INT32, va[k], vb[k]));
                  case "scalar":
                    const scalarType = m.V.T;
                    return keys.every((k) => scalarEquals(scalarType, va[k], vb[k]));
                }
                break;
            }
          });
        },
        clone(message) {
          const type = message.getType(), target = new type(), any = target;
          for (const member of type.fields.byMember()) {
            const source = message[member.localName];
            let copy;
            if (member.repeated) {
              copy = source.map(cloneSingularField);
            } else if (member.kind == "map") {
              copy = any[member.localName];
              for (const [key, v] of Object.entries(source)) {
                copy[key] = cloneSingularField(v);
              }
            } else if (member.kind == "oneof") {
              const f = member.findField(source.case);
              copy = f ? { case: source.case, value: cloneSingularField(source.value) } : { case: void 0 };
            } else {
              copy = cloneSingularField(source);
            }
            any[member.localName] = copy;
          }
          return target;
        }
      };
    }
    function cloneSingularField(value) {
      if (value === void 0) {
        return value;
      }
      if (value instanceof Message) {
        return value.clone();
      }
      if (value instanceof Uint8Array) {
        const c = new Uint8Array(value.byteLength);
        c.set(value);
        return c;
      }
      return value;
    }
    function toU8Arr(input) {
      return input instanceof Uint8Array ? input : new Uint8Array(input);
    }
  
    // node_modules/@bufbuild/protobuf/dist/esm/private/field-list.js
    var InternalFieldList = class {
      constructor(fields, normalizer) {
        this._fields = fields;
        this._normalizer = normalizer;
      }
      findJsonName(jsonName) {
        if (!this.jsonNames) {
          const t = {};
          for (const f of this.list()) {
            t[f.jsonName] = t[f.name] = f;
          }
          this.jsonNames = t;
        }
        return this.jsonNames[jsonName];
      }
      find(fieldNo) {
        if (!this.numbers) {
          const t = {};
          for (const f of this.list()) {
            t[f.no] = f;
          }
          this.numbers = t;
        }
        return this.numbers[fieldNo];
      }
      list() {
        if (!this.all) {
          this.all = this._normalizer(this._fields);
        }
        return this.all;
      }
      byNumber() {
        if (!this.numbersAsc) {
          this.numbersAsc = this.list().concat().sort((a, b) => a.no - b.no);
        }
        return this.numbersAsc;
      }
      byMember() {
        if (!this.members) {
          this.members = [];
          const a = this.members;
          let o;
          for (const f of this.list()) {
            if (f.oneof) {
              if (f.oneof !== o) {
                o = f.oneof;
                a.push(o);
              }
            } else {
              a.push(f);
            }
          }
        }
        return this.members;
      }
    };
  
    // node_modules/@bufbuild/protobuf/dist/esm/private/names.js
    function localFieldName(protoName, inOneof) {
      const name = protoCamelCase(protoName);
      if (inOneof) {
        return name;
      }
      return safeObjectProperty(safeMessageProperty(name));
    }
    function localOneofName(protoName) {
      return localFieldName(protoName, false);
    }
    var fieldJsonName = protoCamelCase;
    function protoCamelCase(snakeCase) {
      let capNext = false;
      const b = [];
      for (let i = 0; i < snakeCase.length; i++) {
        let c = snakeCase.charAt(i);
        switch (c) {
          case "_":
            capNext = true;
            break;
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            b.push(c);
            capNext = false;
            break;
          default:
            if (capNext) {
              capNext = false;
              c = c.toUpperCase();
            }
            b.push(c);
            break;
        }
      }
      return b.join("");
    }
    var reservedObjectProperties = /* @__PURE__ */ new Set([
      // names reserved by JavaScript
      "constructor",
      "toString",
      "toJSON",
      "valueOf"
    ]);
    var reservedMessageProperties = /* @__PURE__ */ new Set([
      // names reserved by the runtime
      "getType",
      "clone",
      "equals",
      "fromBinary",
      "fromJson",
      "fromJsonString",
      "toBinary",
      "toJson",
      "toJsonString",
      // names reserved by the runtime for the future
      "toObject"
    ]);
    var fallback = (name) => `${name}$`;
    var safeMessageProperty = (name) => {
      if (reservedMessageProperties.has(name)) {
        return fallback(name);
      }
      return name;
    };
    var safeObjectProperty = (name) => {
      if (reservedObjectProperties.has(name)) {
        return fallback(name);
      }
      return name;
    };
  
    // node_modules/@bufbuild/protobuf/dist/esm/private/field.js
    var InternalOneofInfo = class {
      constructor(name) {
        this.kind = "oneof";
        this.repeated = false;
        this.packed = false;
        this.opt = false;
        this.default = void 0;
        this.fields = [];
        this.name = name;
        this.localName = localOneofName(name);
      }
      addField(field) {
        assert(field.oneof === this, `field ${field.name} not one of ${this.name}`);
        this.fields.push(field);
      }
      findField(localName) {
        if (!this._lookup) {
          this._lookup = /* @__PURE__ */ Object.create(null);
          for (let i = 0; i < this.fields.length; i++) {
            this._lookup[this.fields[i].localName] = this.fields[i];
          }
        }
        return this._lookup[localName];
      }
    };
  
    // node_modules/@bufbuild/protobuf/dist/esm/proto3.js
    var proto3 = makeProtoRuntime("proto3", makeJsonFormatProto3(), makeBinaryFormatProto3(), Object.assign(Object.assign({}, makeUtilCommon()), {
      newFieldList(fields) {
        return new InternalFieldList(fields, normalizeFieldInfosProto3);
      },
      initFields(target) {
        for (const member of target.getType().fields.byMember()) {
          if (member.opt) {
            continue;
          }
          const name = member.localName, t = target;
          if (member.repeated) {
            t[name] = [];
            continue;
          }
          switch (member.kind) {
            case "oneof":
              t[name] = { case: void 0 };
              break;
            case "enum":
              t[name] = 0;
              break;
            case "map":
              t[name] = {};
              break;
            case "scalar":
              t[name] = scalarDefaultValue(member.T, member.L);
              break;
            case "message":
              break;
          }
        }
      }
    }));
    function normalizeFieldInfosProto3(fieldInfos) {
      var _a, _b, _c, _d;
      const r = [];
      let o;
      for (const field of typeof fieldInfos == "function" ? fieldInfos() : fieldInfos) {
        const f = field;
        f.localName = localFieldName(field.name, field.oneof !== void 0);
        f.jsonName = (_a = field.jsonName) !== null && _a !== void 0 ? _a : fieldJsonName(field.name);
        f.repeated = (_b = field.repeated) !== null && _b !== void 0 ? _b : false;
        if (field.kind == "scalar") {
          f.L = (_c = field.L) !== null && _c !== void 0 ? _c : LongType.BIGINT;
        }
        if (field.oneof !== void 0) {
          const ooname = typeof field.oneof == "string" ? field.oneof : field.oneof.name;
          if (!o || o.name != ooname) {
            o = new InternalOneofInfo(ooname);
          }
          f.oneof = o;
          o.addField(f);
        }
        if (field.kind == "message") {
          f.delimited = false;
        }
        f.packed = (_d = field.packed) !== null && _d !== void 0 ? _d : field.kind == "enum" || field.kind == "scalar" && field.T != ScalarType.BYTES && field.T != ScalarType.STRING;
        r.push(f);
      }
      return r;
    }
  
    // lib/protobuf/response/browse_pb.js
    var Browse = proto3.makeMessageType(
      "youtube.response.browse.Browse",
      () => [
        { no: 1, name: "responseContext", kind: "message", T: ResponseContext },
        { no: 9, name: "contents", kind: "message", T: Contents },
        { no: 10, name: "onResponseReceivedActions", kind: "message", T: Contents }
      ]
    );
    var ResponseContext = proto3.makeMessageType(
      "youtube.response.browse.ResponseContext",
      () => [
        { no: 6, name: "serviceTrackingParams", kind: "message", T: ServiceTrackingParams, repeated: true }
      ]
    );
    var ServiceTrackingParams = proto3.makeMessageType(
      "youtube.response.browse.ServiceTrackingParams",
      () => [
        {
          no: 1,
          name: "service",
          kind: "scalar",
          T: 5
          /* ScalarType.INT32 */
        },
        { no: 2, name: "params", kind: "message", T: Params, repeated: true }
      ]
    );
    var Params = proto3.makeMessageType(
      "youtube.response.browse.Params",
      () => [
        {
          no: 1,
          name: "key",
          kind: "scalar",
          T: 9
          /* ScalarType.STRING */
        },
        {
          no: 2,
          name: "value",
          kind: "scalar",
          T: 9
          /* ScalarType.STRING */
        }
      ]
    );
    var Contents = proto3.makeMessageType(
      "youtube.response.browse.Contents",
      () => [
        { no: 58173949, name: "browseResultsRenderer", kind: "message", T: BrowseResultsRenderer },
        { no: 153515154, name: "videoWithContextRenderer", kind: "message", T: VideoWithContextRenderer },
        { no: 49399797, name: "richGridRenderer", kind: "message", T: RichGridRenderer }
      ]
    );
    var BrowseResultsRenderer = proto3.makeMessageType(
      "youtube.response.browse.BrowseResultsRenderer",
      () => [
        { no: 1, name: "tabs", kind: "message", T: Tab, repeated: true }
      ]
    );
    var Tab = proto3.makeMessageType(
      "youtube.response.browse.Tab",
      () => [
        { no: 58174010, name: "tabRenderer", kind: "message", T: TabRenderer }
      ]
    );
    var TabRenderer = proto3.makeMessageType(
      "youtube.response.browse.TabRenderer",
      () => [
        { no: 4, name: "contents", kind: "message", T: Contents }
      ]
    );
    var RichGridRenderer = proto3.makeMessageType(
      "youtube.response.browse.RichGridRenderer",
      () => [
        { no: 1, name: "richGridContents", kind: "message", T: RichGridContent, repeated: true }
      ]
    );
    var RichGridContent = proto3.makeMessageType(
      "youtube.response.browse.RichGridContent",
      () => [
        { no: 50195462, name: "richItemRenderer", kind: "message", T: RichItemRenderer },
        { no: 51845067, name: "richSectionRenderer", kind: "message", T: RichSectionRenderer },
        { no: 221496734, name: "musicDescriptionShelfRenderer", kind: "message", T: MusicDescriptionShelfRenderer }
      ]
    );
    var RichItemRenderer = proto3.makeMessageType(
      "youtube.response.browse.RichItemRenderer",
      () => [
        { no: 1, name: "richItemContent", kind: "message", T: RichItemContent, repeated: true }
      ]
    );
    var RichItemContent = proto3.makeMessageType(
      "youtube.response.browse.RichItemContent",
      () => [
        { no: 153515154, name: "videoWithContextRenderer", kind: "message", T: VideoWithContextRenderer }
      ]
    );
    var VideoWithContextRenderer = proto3.makeMessageType(
      "youtube.response.browse.VideoWithContextRenderer",
      () => [
        { no: 172660663, name: "videoRendererContent", kind: "message", T: VideoRendererContent }
      ]
    );
    var VideoRendererContent = proto3.makeMessageType(
      "youtube.response.browse.VideoRendererContent",
      () => [
        { no: 1, name: "videoInfo", kind: "message", T: VideoInfo },
        { no: 2, name: "renderInfo", kind: "message", T: RenderInfo }
      ]
    );
    var VideoInfo = proto3.makeMessageType(
      "youtube.response.browse.VideoInfo",
      () => [
        { no: 168777401, name: "videoContext", kind: "message", T: VideoContext }
      ]
    );
    var VideoContext = proto3.makeMessageType(
      "youtube.response.browse.VideoContext",
      () => [
        { no: 5, name: "videoContent", kind: "message", T: VideoContent }
      ]
    );
    var VideoContent = proto3.makeMessageType(
      "youtube.response.browse.VideoContent",
      () => [
        { no: 465160965, name: "timedLyricsRender", kind: "message", T: TimedLyricsRender }
      ]
    );
    var TimedLyricsRender = proto3.makeMessageType(
      "youtube.response.browse.TimedLyricsRender",
      () => [
        { no: 4, name: "timedLyricsContent", kind: "message", T: TimedLyricsContent }
      ]
    );
    var TimedLyricsContent = proto3.makeMessageType(
      "youtube.response.browse.TimedLyricsContent",
      () => [
        { no: 1, name: "runs", kind: "message", T: Run, repeated: true },
        {
          no: 2,
          name: "footerLabel",
          kind: "scalar",
          T: 9
          /* ScalarType.STRING */
        }
      ]
    );
    var RenderInfo = proto3.makeMessageType(
      "youtube.response.browse.RenderInfo",
      () => [
        { no: 183314536, name: "layoutRender", kind: "message", T: LayoutRender }
      ]
    );
    var LayoutRender = proto3.makeMessageType(
      "youtube.response.browse.LayoutRender",
      () => [
        {
          no: 1,
          name: "eml",
          kind: "scalar",
          T: 9
          /* ScalarType.STRING */
        }
      ]
    );
    var RichSectionRenderer = proto3.makeMessageType(
      "youtube.response.browse.RichSectionRenderer",
      () => [
        { no: 5, name: "richSectionContent", kind: "message", T: RichSectionContent }
      ]
    );
    var RichSectionContent = proto3.makeMessageType(
      "youtube.response.browse.RichSectionContent",
      () => [
        { no: 51431404, name: "reelShelfRenderer", kind: "message", T: ReelShelfRenderer }
      ]
    );
    var ReelShelfRenderer = proto3.makeMessageType(
      "youtube.response.browse.ReelShelfRenderer",
      () => [
        { no: 1, name: "richItemContent", kind: "message", T: RichItemContent, repeated: true }
      ]
    );
    var MusicDescriptionShelfRenderer = proto3.makeMessageType(
      "youtube.response.browse.MusicDescriptionShelfRenderer",
      () => [
        { no: 3, name: "description", kind: "message", T: Label },
        { no: 10, name: "footer", kind: "message", T: Label }
      ]
    );
    var Label = proto3.makeMessageType(
      "youtube.response.browse.Label",
      () => [
        { no: 1, name: "runs", kind: "message", T: Run, repeated: true }
      ]
    );
    var Run = proto3.makeMessageType(
      "youtube.response.browse.Run",
      () => [
        {
          no: 1,
          name: "text",
          kind: "scalar",
          T: 9
          /* ScalarType.STRING */
        }
      ]
    );
  
    // lib/protobuf/response/next_pb.js
    var Next = proto3.makeMessageType(
      "youtube.response.next.Next",
      () => [
        { no: 7, name: "Contents", kind: "message", T: Contents2 },
        { no: 8, name: "onResponseReceivedActions", kind: "message", T: Contents }
      ]
    );
    var Contents2 = proto3.makeMessageType(
      "youtube.response.next.Contents",
      () => [
        { no: 51779735, name: "NextResults", kind: "message", T: NextResults }
      ]
    );
    var NextResults = proto3.makeMessageType(
      "youtube.response.next.NextResults",
      () => [
        { no: 1, name: "Contents", kind: "message", T: Contents }
      ]
    );
  
    // lib/protobuf/response/search_pb.js
    var Search = proto3.makeMessageType(
      "youtube.response.search.Search",
      () => [
        { no: 4, name: "contents", kind: "message", T: Contents },
        { no: 7, name: "onResponseReceivedCommands", kind: "message", T: OnResponseReceivedCommands }
      ]
    );
    var OnResponseReceivedCommands = proto3.makeMessageType(
      "youtube.response.search.OnResponseReceivedCommands",
      () => [
        { no: 50195462, name: "richItemRenderer", kind: "message", T: RichItemRenderer },
        { no: 49399797, name: "appendContinuationItemsAction", kind: "message", T: RichGridRenderer }
      ]
    );
  
    // lib/protobuf/response/shorts_pb.js
    var Shorts = proto3.makeMessageType(
      "youtube.response.shorts.Shorts",
      () => [
        { no: 2, name: "entries", kind: "message", T: Entry, repeated: true }
      ]
    );
    var Entry = proto3.makeMessageType(
      "youtube.response.shorts.Entry",
      () => [
        { no: 1, name: "command", kind: "message", T: Command }
      ]
    );
    var Command = proto3.makeMessageType(
      "youtube.response.shorts.Command",
      () => [
        { no: 139608561, name: "reelWatchEndpoint", kind: "message", T: ReelWatchEndpoint }
      ]
    );
    var ReelWatchEndpoint = proto3.makeMessageType(
      "youtube.response.shorts.ReelWatchEndpoint",
      () => [
        { no: 8, name: "overlay", kind: "message", T: Overlay }
      ]
    );
    var Overlay = proto3.makeMessageType(
      "youtube.response.shorts.Overlay",
      () => [
        { no: 139970731, name: "reelPlayerOverlayRenderer", kind: "message", T: ReelPlayerOverlayRenderer }
      ]
    );
    var ReelPlayerOverlayRenderer = proto3.makeMessageType(
      "youtube.response.shorts.ReelPlayerOverlayRenderer",
      () => [
        {
          no: 12,
          name: "style",
          kind: "scalar",
          T: 5
          /* ScalarType.INT32 */
        }
      ]
    );
  
    // lib/protobuf/response/guide_pb.js
    var Guide = proto3.makeMessageType(
      "youtube.response.browse.Guide",
      () => [
        { no: 4, name: "items4", kind: "message", T: Item, repeated: true },
        { no: 6, name: "items6", kind: "message", T: Item, repeated: true }
      ]
    );
    var Item = proto3.makeMessageType(
      "youtube.response.browse.Item",
      () => [
        { no: 117866661, name: "guideSectionRenderer", kind: "message", T: GuideSectionRenderer }
      ]
    );
    var GuideSectionRenderer = proto3.makeMessageType(
      "youtube.response.browse.GuideSectionRenderer",
      () => [
        { no: 1, name: "rendererItems", kind: "message", T: RendererItem, repeated: true }
      ]
    );
    var RendererItem = proto3.makeMessageType(
      "youtube.response.browse.RendererItem",
      () => [
        { no: 318370163, name: "iconRender", kind: "message", T: guideEntryRenderer },
        { no: 117501096, name: "labelRender", kind: "message", T: guideEntryRenderer }
      ]
    );
    var guideEntryRenderer = proto3.makeMessageType(
      "youtube.response.browse.guideEntryRenderer",
      () => [
        {
          no: 1,
          name: "browseId",
          kind: "scalar",
          T: 9
          /* ScalarType.STRING */
        }
      ]
    );
  
    // lib/protobuf/response/player_pb.js
    var Player = proto3.makeMessageType(
      "youtube.response.player.Player",
      () => [
        { no: 7, name: "adPlacements", kind: "message", T: AdPlacement, repeated: true },
        { no: 2, name: "playabilityStatus", kind: "message", T: PlayabilityStatus },
        { no: 9, name: "playbackTracking", kind: "message", T: PlaybackTracking },
        { no: 10, name: "captions", kind: "message", T: Captions }
      ]
    );
    var AdPlacement = proto3.makeMessageType(
      "youtube.response.player.AdPlacement",
      () => [
        { no: 84813246, name: "adPlacementRenderer", kind: "message", T: AdPlacementRenderer }
      ]
    );
    var AdPlacementRenderer = proto3.makeMessageType(
      "youtube.response.player.AdPlacementRenderer",
      () => [
        {
          no: 4,
          name: "params",
          kind: "scalar",
          T: 9
          /* ScalarType.STRING */
        }
      ]
    );
    var PlayabilityStatus = proto3.makeMessageType(
      "youtube.response.player.PlayabilityStatus",
      () => [
        { no: 21, name: "miniPlayer", kind: "message", T: MiniPlayer },
        { no: 11, name: "backgroundPlayer", kind: "message", T: BackgroundPlayer }
      ]
    );
    var MiniPlayer = proto3.makeMessageType(
      "youtube.response.player.MiniPlayer",
      () => [
        { no: 151635310, name: "miniPlayerRender", kind: "message", T: MiniPlayerRender }
      ]
    );
    var BackgroundPlayer = proto3.makeMessageType(
      "youtube.response.player.BackgroundPlayer",
      () => [
        { no: 64657230, name: "backgroundPlayerRender", kind: "message", T: BackgroundPlayerRender }
      ]
    );
    var MiniPlayerRender = proto3.makeMessageType(
      "youtube.response.player.MiniPlayerRender",
      () => [
        {
          no: 1,
          name: "active",
          kind: "scalar",
          T: 8
          /* ScalarType.BOOL */
        }
      ]
    );
    var BackgroundPlayerRender = proto3.makeMessageType(
      "youtube.response.player.BackgroundPlayerRender",
      () => [
        {
          no: 1,
          name: "active",
          kind: "scalar",
          T: 8
          /* ScalarType.BOOL */
        }
      ]
    );
    var PlaybackTracking = proto3.makeMessageType(
      "youtube.response.player.PlaybackTracking",
      () => [
        { no: 1, name: "videostatsPlaybackUrl", kind: "message", T: Tracking },
        { no: 2, name: "videostatsDelayplayUrl", kind: "message", T: Tracking },
        { no: 3, name: "videostatsWatchtimeUrl", kind: "message", T: Tracking },
        { no: 4, name: "ptrackingUrl", kind: "message", T: Tracking },
        { no: 5, name: "qoeUrl", kind: "message", T: Tracking },
        { no: 13, name: "atrUrl", kind: "message", T: Tracking },
        { no: 15, name: "videostatsEngageUrl", kind: "message", T: Tracking },
        { no: 18, name: "pageadViewthroughconversion", kind: "message", T: Tracking }
      ]
    );
    var Tracking = proto3.makeMessageType(
      "youtube.response.player.Tracking",
      () => [
        {
          no: 1,
          name: "baseUrl",
          kind: "scalar",
          T: 9
          /* ScalarType.STRING */
        }
      ]
    );
    var Captions = proto3.makeMessageType(
      "youtube.response.player.Captions",
      () => [
        { no: 51621377, name: "playerCaptionsTrackListRenderer", jsonName: "playerCaptionsTracklistRenderer", kind: "message", T: PlayerCaptionsTrackListRenderer }
      ]
    );
    var PlayerCaptionsTrackListRenderer = proto3.makeMessageType(
      "youtube.response.player.PlayerCaptionsTrackListRenderer",
      () => [
        { no: 1, name: "captionTracks", kind: "message", T: CaptionTrack, repeated: true },
        { no: 2, name: "audioTracks", kind: "message", T: AudioTrack, repeated: true },
        { no: 3, name: "translationLanguages", kind: "message", T: TranslationLanguage, repeated: true },
        { no: 4, name: "defaultAudioTrackIndex", kind: "scalar", T: 5, opt: true },
        { no: 6, name: "defaultCaptionTrackIndex", kind: "scalar", T: 5, opt: true }
      ]
    );
    var CaptionTrack = proto3.makeMessageType(
      "youtube.response.player.CaptionTrack",
      () => [
        {
          no: 1,
          name: "baseUrl",
          kind: "scalar",
          T: 9
          /* ScalarType.STRING */
        },
        { no: 2, name: "name", kind: "message", T: Name },
        {
          no: 3,
          name: "vssId",
          kind: "scalar",
          T: 9
          /* ScalarType.STRING */
        },
        {
          no: 4,
          name: "languageCode",
          kind: "scalar",
          T: 9
          /* ScalarType.STRING */
        },
        { no: 5, name: "kind", kind: "scalar", T: 9, opt: true },
        { no: 6, name: "rtl", kind: "scalar", T: 8, opt: true },
        {
          no: 7,
          name: "isTranslatable",
          kind: "scalar",
          T: 8
          /* ScalarType.BOOL */
        }
      ]
    );
    var AudioTrack = proto3.makeMessageType(
      "youtube.response.player.AudioTrack",
      () => [
        { no: 2, name: "captionTrackIndices", kind: "scalar", T: 5, repeated: true, packed: false },
        { no: 3, name: "defaultCaptionTrackIndex", kind: "scalar", T: 5, opt: true },
        { no: 4, name: "forcedCaptionTrackIndex", kind: "scalar", T: 5, opt: true },
        { no: 5, name: "visibility", kind: "scalar", T: 5, opt: true },
        { no: 6, name: "hasDefaultTrack", kind: "scalar", T: 8, opt: true },
        { no: 7, name: "hasForcedTrack", kind: "scalar", T: 8, opt: true },
        { no: 8, name: "audioTrackId", kind: "scalar", T: 9, opt: true },
        { no: 11, name: "captionsInitialState", kind: "scalar", T: 5, opt: true }
      ]
    );
    var TranslationLanguage = proto3.makeMessageType(
      "youtube.response.player.TranslationLanguage",
      () => [
        {
          no: 1,
          name: "languageCode",
          kind: "scalar",
          T: 9
          /* ScalarType.STRING */
        },
        { no: 2, name: "languageName", kind: "message", T: Name }
      ]
    );
    var Name = proto3.makeMessageType(
      "youtube.response.player.Name",
      () => [
        { no: 1, name: "runs", kind: "message", T: Name_Run, repeated: true }
      ]
    );
    var Name_Run = proto3.makeMessageType(
      "youtube.response.player.Name.Run",
      () => [
        {
          no: 1,
          name: "text",
          kind: "scalar",
          T: 9
          /* ScalarType.STRING */
        }
      ],
      { localName: "Name_Run" }
    );
  
    // lib/protobuf/response/setting_pb.js
    var Setting = proto3.makeMessageType(
      "youtube.response.setting.Setting",
      () => [
        { no: 6, name: "settingItems", kind: "message", T: SettingItem, repeated: true },
        { no: 10, name: "trackingParams", kind: "message", T: TrackingParams }
      ]
    );
    var SettingItem = proto3.makeMessageType(
      "youtube.response.setting.SettingItem",
      () => [
        { no: 88478200, name: "settingCategoryEntryRenderer", kind: "message", T: SettingCategoryEntryRenderer },
        { no: 66930374, name: "settingCategoryCollectionRenderer", kind: "message", T: SettingCategoryCollectionRenderer }
      ]
    );
    var TrackingParams = proto3.makeMessageType(
      "youtube.response.setting.TrackingParams",
      () => [
        {
          no: 1,
          name: "f1",
          kind: "scalar",
          T: 5
          /* ScalarType.INT32 */
        },
        {
          no: 2,
          name: "f2",
          kind: "scalar",
          T: 5
          /* ScalarType.INT32 */
        },
        {
          no: 3,
          name: "f3",
          kind: "scalar",
          T: 5
          /* ScalarType.INT32 */
        },
        { no: 4, name: "timeInfo", kind: "message", T: TimeInfo }
      ]
    );
    var TimeInfo = proto3.makeMessageType(
      "youtube.response.setting.TimeInfo",
      () => [
        {
          no: 1,
          name: "timestamp",
          kind: "scalar",
          T: 4,
          L: 1
          /* LongType.STRING */
        },
        {
          no: 2,
          name: "f2",
          kind: "scalar",
          T: 7
          /* ScalarType.FIXED32 */
        },
        {
          no: 3,
          name: "f3",
          kind: "scalar",
          T: 7
          /* ScalarType.FIXED32 */
        }
      ]
    );
    var SettingCategoryEntryRenderer = proto3.makeMessageType(
      "youtube.response.setting.SettingCategoryEntryRenderer",
      () => [
        {
          no: 2,
          name: "f2",
          kind: "scalar",
          T: 5
          /* ScalarType.INT32 */
        },
        {
          no: 3,
          name: "f3",
          kind: "scalar",
          T: 5
          /* ScalarType.INT32 */
        },
        { no: 5, name: "trackingParams", kind: "message", T: TrackingParams },
        {
          no: 6,
          name: "f6",
          kind: "scalar",
          T: 5
          /* ScalarType.INT32 */
        },
        {
          no: 7,
          name: "f7",
          kind: "scalar",
          T: 5
          /* ScalarType.INT32 */
        },
        {
          no: 8,
          name: "f8",
          kind: "scalar",
          T: 5
          /* ScalarType.INT32 */
        },
        {
          no: 9,
          name: "f9",
          kind: "scalar",
          T: 5
          /* ScalarType.INT32 */
        },
        {
          no: 10,
          name: "f10",
          kind: "scalar",
          T: 5
          /* ScalarType.INT32 */
        },
        {
          no: 12,
          name: "f12",
          kind: "scalar",
          T: 5
          /* ScalarType.INT32 */
        }
      ]
    );
    var SettingCategoryCollectionRenderer = proto3.makeMessageType(
      "youtube.response.setting.SettingCategoryCollectionRenderer",
      () => [
        { no: 3, name: "subSettings", kind: "message", T: SubSetting, repeated: true },
        {
          no: 4,
          name: "categoryId",
          kind: "scalar",
          T: 5
          /* ScalarType.INT32 */
        }
      ]
    );
    var SubSetting = proto3.makeMessageType(
      "youtube.response.setting.SubSetting",
      () => [
        { no: 61331416, name: "settingBooleanRenderer", kind: "message", T: SettingBooleanRenderer }
      ]
    );
    var SettingBooleanRenderer = proto3.makeMessageType(
      "youtube.response.setting.SettingBooleanRenderer",
      () => [
        { no: 5, name: "enableServiceEndpoint", kind: "message", T: ServiceEndpoint },
        { no: 6, name: "disableServiceEndpoint", kind: "message", T: ServiceEndpoint },
        { no: 13, name: "clickTrackingParams", kind: "message", T: TrackingParams },
        {
          no: 15,
          name: "itemId",
          kind: "scalar",
          T: 5
          /* ScalarType.INT32 */
        }
      ]
    );
    var ServiceEndpoint = proto3.makeMessageType(
      "youtube.response.setting.ServiceEndpoint",
      () => [
        { no: 2, name: "trackingParams", kind: "message", T: TrackingParams },
        { no: 81212182, name: "setClientSettingEndpoint", kind: "message", T: SetClientSettingEndpoint }
      ]
    );
    var SetClientSettingEndpoint = proto3.makeMessageType(
      "youtube.response.setting.SetClientSettingEndpoint",
      () => [
        { no: 1, name: "settingDatas", kind: "message", T: SettingDatas }
      ]
    );
    var SettingDatas = proto3.makeMessageType(
      "youtube.response.setting.SettingDatas",
      () => [
        { no: 1, name: "clientSettingEnum", kind: "message", T: ClientSettingEnum },
        {
          no: 3,
          name: "boolValue",
          kind: "scalar",
          T: 8
          /* ScalarType.BOOL */
        }
      ]
    );
    var ClientSettingEnum = proto3.makeMessageType(
      "youtube.response.setting.ClientSettingEnum",
      () => [
        {
          no: 1,
          name: "item",
          kind: "scalar",
          T: 5
          /* ScalarType.INT32 */
        }
      ]
    );
  
    // lib/protobuf/response/watch_pb.js
    var Watch = proto3.makeMessageType(
      "youtube.response.watch.Watch",
      () => [
        { no: 1, name: "contents", kind: "message", T: Content, repeated: true }
      ]
    );
    var Content = proto3.makeMessageType(
      "youtube.response.watch.Content",
      () => [
        { no: 2, name: "player", kind: "message", T: Player },
        { no: 3, name: "next", kind: "message", T: Next }
      ]
    );
  
    // lib/client.ts
    var _Client = class {
      _times = /* @__PURE__ */ new Map();
      name;
      isDebug;
      className;
      request;
      response;
      constructor(name, className, options) {
        this.name = name ?? "";
        this.isDebug = options?.debug ?? false;
        if (name) {
          this.debug(`${name} Start`);
        }
        this.className = className ?? "";
        this.init();
      }
      static getInstance(name, options) {
        let className = "Surge";
        if (typeof $loon !== "undefined") {
          className = "Loon";
        } else if (typeof $task !== "undefined") {
          className = "QuanX";
        }
        if (!_Client.instances[className]) {
          _Client.instances[className] = _Client.classNames[className](
            name,
            className,
            options
          );
        }
        return _Client.instances[className];
      }
      createProxy(target) {
        return new Proxy(target, {
          get: this.getFn,
          set: this.setFn
        });
      }
      getFn(t, p, r) {
        return t[p];
      }
      setFn(t, p, v, r) {
        t[p] = v;
        return true;
      }
      getJSON(key, alter = {}) {
        const val = this.getVal(key);
        return val ? JSON.parse(val) : alter;
      }
      setJSON(val, key) {
        this.setVal(JSON.stringify(val), key);
      }
      msg(title = this.name, subTitle = "", desc = "", url) {
      }
      debug(val) {
        if (this.isDebug) {
          if (typeof val === "object") {
            val = JSON.stringify(val);
          }
          console.log(val);
        }
      }
      log(val) {
        if (typeof val === "object") {
          val = JSON.stringify(val);
        }
        console.log(val);
      }
      timeStart(label) {
        this._times.set(label, Date.now());
      }
      timeEnd(label) {
        if (this._times.has(label)) {
          const now = this._times.get(label) ?? 0;
          const timeElapsed = Date.now() - now;
          this.debug(`${label}: ${timeElapsed}ms`);
          this._times.delete(label);
        } else {
          this.debug(`Timer with label ${label} does not exist.`);
        }
      }
      exit() {
        $done({});
      }
      reject() {
        $done();
      }
      decodeParams(params, tag) {
        return params;
      }
    };
    var Client = _Client;
    __publicField(Client, "instances", {});
    __publicField(Client, "classNames", {
      QuanX: (name, className, options) => new QuanXClient(name, className, options),
      Surge: (name, className, options) => new SurgeClient(name, className, options),
      Loon: (name, className, options) => new LoonClient(name, className, options)
    });
    var _SurgeClient = class extends Client {
      getFn(t, p, receiver) {
        const key = _SurgeClient.clientAdapter[p] || p;
        return super.getFn(t, key, receiver);
      }
      setFn(t, p, newValue, receiver) {
        const key = _SurgeClient.clientAdapter[p] || p;
        return super.setFn(t, key, newValue, receiver);
      }
      init() {
        try {
          this.request = this.createProxy(
            $request
          );
          this.response = this.createProxy(
            $response
          );
        } catch (e) {
          this.debug(e.toString());
        }
      }
      getVal(key) {
        return $persistentStore.read(key);
      }
      setVal(val, key) {
        $persistentStore.write(val, key);
      }
      msg(title = this.name, subTitle = "", desc = "", url) {
        $notification.post(title, subTitle, desc, { url: url ?? "" });
      }
      async fetch(request) {
        return await new Promise((resolve, reject) => {
          const {
            method,
            body,
            bodyBytes,
            ...httpClientRequest
          } = request;
          const realBody = bodyBytes ?? body;
          const isBinary = realBody instanceof Uint8Array;
          $httpClient[method.toLowerCase()](
            {
              ...httpClientRequest,
              body: realBody,
              "binary-mode": isBinary
            },
            (error, response, data) => {
              if (error) {
                reject(error);
              }
              const bodyKey = isBinary ? "bodyBytes" : "body";
              resolve({
                status: response.status || response.statusCode,
                headers: response.headers,
                [bodyKey]: data
              });
            }
          );
        });
      }
      done(cDone) {
        const realResponse = cDone.response ?? cDone;
        let body;
        let sgDone;
        if (realResponse.bodyBytes) {
          body = realResponse.bodyBytes;
          delete realResponse.bodyBytes;
          sgDone = { ...cDone };
          sgDone.response ? sgDone.response.body = body : sgDone.body = body;
        } else {
          sgDone = cDone;
        }
        $done(sgDone);
      }
      decodeParams(params, tag) {
        if (typeof $argument === "string" && !$argument.includes("{{{")) {
          Object.assign(params, JSON.parse($argument));
        }
        return params;
      }
    };
    var SurgeClient = _SurgeClient;
    __publicField(SurgeClient, "clientAdapter", {
      bodyBytes: "body"
    });
    var _QuanXClient = class extends Client {
      static transferBodyBytes(bodyBytes, target) {
        if (bodyBytes instanceof ArrayBuffer) {
          return target === "Uint8Array" ? new Uint8Array(bodyBytes) : bodyBytes;
        } else if (bodyBytes instanceof Uint8Array) {
          return target === "ArrayBuffer" ? bodyBytes.buffer.slice(
            bodyBytes.byteOffset,
            bodyBytes.byteLength + bodyBytes.byteOffset
          ) : bodyBytes;
        }
        return bodyBytes;
      }
      init() {
        try {
          this.request = this.createProxy(
            $request
          );
          this.response = this.createProxy(
            $response
          );
        } catch (e) {
          this.debug(e.toString());
        }
      }
      getFn(t, p, receiver) {
        const key = _QuanXClient.clientAdapter[p] || p;
        let output = super.getFn(t, key, receiver);
        if (p === "bodyBytes") {
          output = _QuanXClient.transferBodyBytes(output, "Uint8Array");
        }
        return output;
      }
      setFn(t, p, newValue, receiver) {
        const key = _QuanXClient.clientAdapter[p] || p;
        let output = newValue;
        if (p === "bodyBytes") {
          output = _QuanXClient.transferBodyBytes(output, "Uint8Array");
        }
        return super.setFn(t, key, output, receiver);
      }
      getVal(key) {
        return $prefs.valueForKey(key)?.replace(/\0/g, "");
      }
      setVal(val, key) {
        $prefs.setValueForKey(val, key);
      }
      msg(title = this.name, subTitle = "", desc = "", url) {
        $notify(title, subTitle, desc, { "open-url": url ?? "" });
      }
      async fetch(request) {
        return await new Promise((resolve) => {
          const qxFetchRequest = {
            url: "",
            method: "GET"
          };
          for (const [key, value] of Object.entries(request)) {
            if (key === "id") {
              qxFetchRequest.sessionIndex = value;
            } else if (key === "bodyBytes") {
              qxFetchRequest.bodyBytes = _QuanXClient.transferBodyBytes(
                value,
                "ArrayBuffer"
              );
            } else {
              qxFetchRequest[key] = value;
            }
          }
          if (request.bodyBytes)
            delete qxFetchRequest.body;
          void $task.fetch(qxFetchRequest).then((resp) => {
            const cFetchResponse = {
              status: 200,
              headers: {}
            };
            for (const [key, value] of Object.entries(resp)) {
              if (key === "sessionIndex") {
                cFetchResponse.id = value;
              } else if (key === "bodyBytes") {
                cFetchResponse.bodyBytes = _QuanXClient.transferBodyBytes(
                  value,
                  "Uint8Array"
                );
              } else if (key === "statusCode") {
                cFetchResponse.status = value;
              } else {
                cFetchResponse[key] = value;
              }
            }
            resolve(cFetchResponse);
          });
        });
      }
      done(cDone) {
        const realResponse = cDone.response ?? cDone;
        const qxDone = {};
        for (const [key, value] of Object.entries(realResponse)) {
          if (key === "status") {
            qxDone.status = `HTTP/1.1 ${value}`;
          } else if (key === "bodyBytes") {
            qxDone.bodyBytes = _QuanXClient.transferBodyBytes(
              value,
              "ArrayBuffer"
            );
          } else {
            qxDone[key] = value;
          }
        }
        $done(qxDone);
      }
    };
    var QuanXClient = _QuanXClient;
    __publicField(QuanXClient, "clientAdapter", {
      id: "sessionIndex",
      status: "statusCode"
    });
    var LoonClient = class extends SurgeClient {
      decodeParams(params, tag) {
        const temp = {};
        for (const [k, v] of Object.entries(params)) {
          const realKey = tag?.[k] ?? k;
          const value = this.getVal(realKey);
          if (value) {
            temp[k] = this.transferType(v, value);
          }
        }
        Object.assign(params, temp);
        return params;
      }
      transferType(dst, src) {
        if (typeof dst === "boolean") {
          return src === "true";
        } else if (typeof dst === "number") {
          return Number(src);
        }
        return src;
      }
    };
  
    // lib/env.ts
    var $ = Client.getInstance("YouTube");
  
    // src/youtube.ts
    var YouTubeMessage = class {
      name;
      needProcess;
      needSave;
      message;
      whiteNo;
      blackNo;
      whiteEml;
      blackEml;
      msgType;
      argument;
      decoder = new TextDecoder("utf-8", {
        fatal: false,
        ignoreBOM: true
      });
      constructor(msgType, name) {
        this.name = name;
        this.msgType = msgType;
        this.argument = this.decodeArgument();
        $.isDebug = Boolean(this.argument.debug);
        $.debug(this.name);
        Object.assign(this, $.getJSON("YouTubeAdvertiseInfo", {
          whiteNo: [],
          blackNo: [],
          whiteEml: [],
          blackEml: []
        }));
      }
      decodeArgument() {
        const tag = {
          lyricLang: "\u6B4C\u8BCD\u7FFB\u8BD1\u8BED\u8A00",
          captionLang: "\u5B57\u5E55\u7FFB\u8BD1\u8BED\u8A00",
          blockUpload: "\u5C4F\u853D\u4E0A\u4F20\u6309\u94AE",
          blockImmersive: "\u5C4F\u853D\u9009\u6BB5\u6309\u94AE",
          debug: "\u542F\u52A8\u8C03\u8BD5\u6A21\u5F0F"
        };
        const args = {
          lyricLang: "vi",
          captionLang: "vi",
          blockUpload: true,
          blockImmersive: true,
          debug: false
        };
        return $.decodeParams(args, tag);
      }
      fromBinary(binaryBody) {
        if (binaryBody instanceof Uint8Array) {
          this.message = this.msgType.fromBinary(binaryBody);
          $.debug(`raw: ${Math.floor(binaryBody.length / 1024)} kb`);
          return this;
        }
        $.log("YouTube can not get binaryBody");
        $.exit();
        return this;
      }
      async modify() {
        const pureMessage = this.pure();
        if (pureMessage instanceof Promise) {
          return await pureMessage;
        } else {
          return pureMessage;
        }
      }
      toBinary() {
        return this.message.toBinary();
      }
      listUnknownFields(msg) {
        if (msg instanceof Message) {
          return msg.getType().runtime.bin.listUnknownFields(msg);
        }
        return [];
      }
      save() {
        if (this.needSave) {
          $.debug("Update Config");
          const YouTubeAdvertiseInfo = {
            whiteNo: this.whiteNo,
            blackNo: this.blackNo,
            whiteEml: this.whiteEml,
            blackEml: this.blackEml
          };
          $.setJSON(YouTubeAdvertiseInfo, "YouTubeAdvertiseInfo");
        }
      }
      // done (response: CFetchResponse): void {
      //   this.save()
      //   let body = response.bodyBytes
      //   if (this.needProcess) body = this.toBinary()
      //
      //   response.headers['Content-Encoding'] = 'identity'
      //   response.headers['Content-Length'] = (body?.length ?? 0)?.toString()
      //
      //   $.done({
      //     response: {
      //       ...response,
      //       bodyBytes: body
      //     }
      //   })
      // }
      done() {
        this.save();
        if (this.needProcess) {
          $.timeStart("toBinary");
          const bodyBytes = this.toBinary();
          $.timeEnd("toBinary");
          $.debug(`modify: ${Math.floor(bodyBytes.length / 1024)} kb`);
          $.done({ bodyBytes });
        }
        $.debug("use $done({})");
        $.exit();
      }
      iterate(obj = {}, target, call) {
        const stack = typeof obj === "object" ? [obj] : [];
        while (stack.length) {
          const item = stack.pop();
          const keys = Object.keys(item);
          if (typeof target === "symbol") {
            for (const s of Object.getOwnPropertySymbols(item)) {
              if (s.description === target.description) {
                call(item, stack);
                break;
              }
            }
          }
          for (const key of keys) {
            if (key === target) {
              call(item, stack);
            } else if (typeof item[key] === "object") {
              stack.push(item[key]);
            }
          }
        }
      }
      isAdvertise(o) {
        const filed = this.listUnknownFields(o)[0];
        return filed ? this.handleFieldNo(filed) : this.handleFieldEml(o);
      }
      handleFieldNo(field) {
        const no = field.no;
        if (this.whiteNo.includes(no)) {
          return false;
        } else if (this.blackNo.includes(no)) {
          return true;
        }
        const rawText = this.decoder.decode(field.data);
        const adFlag = rawText.includes("pagead");
        adFlag ? this.blackNo.push(no) : this.whiteNo.push(no);
        this.needSave = true;
        return adFlag;
      }
      handleFieldEml(field) {
        let adFlag = false;
        let eml = "";
        this.iterate(field, "renderInfo", (obj, stack) => {
          eml = obj.renderInfo.layoutRender.eml.split("|")[0];
          if (this.whiteEml.includes(eml)) {
            adFlag = false;
          } else if (this.blackEml.includes(eml) || /shorts(?!_pivot_item)/.test(eml)) {
            adFlag = true;
          } else {
            const videoContent = obj?.videoInfo?.videoContext?.videoContent;
            if (videoContent) {
              const unknownField = this.listUnknownFields(videoContent)[0];
              const rawText = this.decoder.decode(unknownField.data);
              adFlag = rawText.includes("pagead");
              adFlag ? this.blackEml.push(eml) : this.whiteEml.push(eml);
              this.needSave = true;
            }
          }
          stack.length = 0;
        });
        return adFlag;
      }
      isShorts(field) {
        let flag = false;
        this.iterate(field, "eml", (obj, stack) => {
          flag = /shorts(?!_pivot_item)/.test(obj.eml);
          stack.length = 0;
        });
        return flag;
      }
    };
  
    // lib/googleTranslate.ts
    function TL(a) {
      const b = 406644;
      const b1 = 3293161072;
      const jd = ".";
      const $b = "+-a^+6";
      const Zb = "+-3^+b+-f";
      let e, f, g;
      for (e = [], f = 0, g = 0; g < a.length; g++) {
        let m = a.charCodeAt(g);
        128 > m ? e[f++] = m : (2048 > m ? e[f++] = m >> 6 | 192 : (55296 == (m & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (m = 65536 + ((m & 1023) << 10) + (a.charCodeAt(++g) & 1023), e[f++] = m >> 18 | 240, e[f++] = m >> 12 & 63 | 128) : e[f++] = m >> 12 | 224, e[f++] = m >> 6 & 63 | 128), e[f++] = m & 63 | 128);
      }
      a = b;
      for (f = 0; f < e.length; f++)
        a += e[f], a = RL(a, $b);
      a = RL(a, Zb);
      a ^= b1 || 0;
      0 > a && (a = (a & 2147483647) + 2147483648);
      a %= 1e6;
      return a.toString() + jd + (a ^ b);
    }
    function RL(a, b) {
      const t = "a";
      const Yb = "+";
      let d;
      for (let c = 0; c < b.length - 2; c += 3) {
        d = b.charAt(c + 2), d = d >= t ? d.charCodeAt(0) - 87 : Number(d), d = b.charAt(c + 1) == Yb ? a >>> d : a << d;
        a = b.charAt(c) == Yb ? a + d & 4294967295 : a ^ d;
      }
      return a;
    }
    function translateURL(lyric, target) {
      return `https://translate.google.com/translate_a/single?client=gtx&sl=auto&tl=${target}&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&source=bh&ssel=0&tsel=0&kc=1&tk=${TL(lyric)}&q=${encodeURIComponent(lyric)}`;
    }
  
    // src/responseHandler.ts
    var BrowseMessage = class extends YouTubeMessage {
      constructor(msgType = Browse, name = "Browse") {
        super(msgType, name);
      }
      async pure() {
        this.iterate(this.message, "richGridContents", (obj) => {
          for (let i = obj.richGridContents.length - 1; i >= 0; i--) {
            this.removeCommonAD(obj, i);
            this.removeShorts(obj, i);
          }
        });
        await this.translate();
        return this;
      }
      removeCommonAD(obj, index) {
        const content = obj.richGridContents[index];
        const richItemContent = content?.richItemRenderer?.richItemContent;
        for (let j = richItemContent?.length - 1; j >= 0; j--) {
          if (this.isAdvertise(richItemContent[j])) {
            richItemContent.splice(j, 1);
            this.needProcess = true;
          }
        }
      }
      removeShorts(obj, index) {
        const richSectionRenderer = obj.richGridContents[index]?.richSectionRenderer;
        if (this.isShorts(richSectionRenderer)) {
          obj.richGridContents.splice(index, 1);
          this.needProcess = true;
        }
      }
      getBrowseId() {
        let browseId = "";
        this.iterate(this.message?.responseContext, "key", (obj, stack) => {
          if (obj.key === "browse_id") {
            browseId = obj.value;
            stack.length = 0;
          }
        });
        return browseId;
      }
      async translate() {
        const lyricTargetLang = this.argument.lyricLang?.trim();
        if (!(this.name === "Browse" && this.getBrowseId().startsWith("MPLYt")) || lyricTargetLang === "off")
          return;
        let lyric = "";
        let tempObj;
        let flag = false;
        this.iterate(this.message, "timedLyricsContent", (obj, stack) => {
          tempObj = obj.timedLyricsContent;
          lyric = obj.timedLyricsContent.runs.map((item) => item.text).join("\n");
          flag = true;
          stack.length = 0;
        });
        if (!flag) {
          this.iterate(this.message, "description", (obj, stack) => {
            tempObj = obj.description.runs[0];
            lyric = obj.description.runs[0].text;
            stack.length = 0;
            flag = true;
          });
        }
        if (!flag)
          return;
        const origin = lyricTargetLang.split("-")[0];
        const url = translateURL(lyric, lyricTargetLang);
        const resp = await $.fetch({
          method: "GET",
          url
        });
        if (resp.status === 200 && resp.body) {
          const data = JSON.parse(resp.body);
          const tips = " & Translated by Google";
          const isOrigin = data[2].includes(origin);
          if (tempObj.text) {
            tempObj.text = data[0].map((item) => isOrigin ? item[0] : item[1] + item[0] || "").join("\r\n");
            this.iterate(this.message, "footer", (ob, stack) => {
              ob.footer.runs[0].text += tips;
              stack.length = 0;
            });
          } else {
            if (tempObj.runs.length <= data[0].length) {
              tempObj.runs.forEach((item, i) => {
                item.text = isOrigin ? data[0][i][0] : item.text + `
  ${data[0][i][0]}`;
              });
              tempObj.footerLabel += tips;
            }
          }
          this.needProcess = true;
        }
      }
    };
    var NextMessage = class extends BrowseMessage {
      constructor(msgType = Next, name = "Next") {
        super(msgType, name);
      }
      addTranslateTab() {
        this.iterate(this.message?.a1F7?.musicPlayRender, "items", (obj, stack) => {
          const item = obj.items.find(
            (item2) => item2.tab.info?.browseInfo?.browseId.startsWith("MPLYt")
          );
          if (item)
            item.tab.name = item.tab.name + "\u21C4";
          this.needProcess = true;
          stack.length = 0;
        });
      }
    };
    var PlayerMessage = class extends YouTubeMessage {
      constructor(msgType = Player, name = "Player") {
        super(msgType, name);
      }
      pure() {
        if (this.message.adPlacements?.length) {
          this.message.adPlacements.length = 0;
        }
        delete this.message?.playbackTracking?.pageadViewthroughconversion;
        this.addPlayAbility();
        this.addTranslateCaption();
        this.needProcess = true;
        return this;
      }
      addPlayAbility() {
        const miniPlayerRender = this.message?.playabilityStatus?.miniPlayer?.miniPlayerRender;
        if (typeof miniPlayerRender === "object") {
          miniPlayerRender.active = true;
        }
        if (typeof this.message.playabilityStatus === "object") {
          this.message.playabilityStatus.backgroundPlayer = new BackgroundPlayer({
            backgroundPlayerRender: {
              active: true
            }
          });
        }
      }
      addTranslateCaption() {
        const captionTargetLang = this.argument.captionLang;
        if (captionTargetLang === "off")
          return;
        this.iterate(this.message, "captionTracks", (obj, stack) => {
          const captionTracks = obj.captionTracks;
          const audioTracks = obj.audioTracks;
          if (Array.isArray(captionTracks)) {
            const captionPriority = {
              [captionTargetLang]: 2,
              en: 1
            };
            let priority = -1;
            let targetIndex = 0;
            for (let i = 0; i < captionTracks.length; i++) {
              const captionTrack = captionTracks[i];
              const currentPriority = captionPriority[captionTrack.languageCode];
              if (currentPriority && currentPriority > priority) {
                priority = currentPriority;
                targetIndex = i;
              }
              captionTrack.isTranslatable = true;
            }
            if (priority !== 2) {
              const newCaption = new CaptionTrack({
                baseUrl: captionTracks[targetIndex].baseUrl + `&tlang=${captionTargetLang}`,
                name: { runs: [{ text: `@Enhance (${captionTargetLang})` }] },
                vssId: `.${captionTargetLang}`,
                languageCode: captionTargetLang
              });
              captionTracks.push(newCaption);
            }
            if (Array.isArray(audioTracks)) {
              const trackIndex = priority === 2 ? targetIndex : captionTracks.length - 1;
              for (const audioTrack of audioTracks) {
                if (!audioTrack.captionTrackIndices?.includes(trackIndex)) {
                  audioTrack.captionTrackIndices.push(trackIndex);
                }
                audioTrack.defaultCaptionTrackIndex = trackIndex;
                audioTrack.captionsInitialState = 3;
              }
            }
          }
          const languages = {
            de: "Deutsch",
            ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
            fr: "Fran\xE7ais",
            fil: "Filipino",
            ko: "\uD55C\uAD6D\uC5B4",
            ja: "\u65E5\u672C\u8A9E",
            en: "English",
            vi: "Ti\u1EBFng Vi\u1EC7t",
            "zh-Hant": "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09",
            "zh-Hans": "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09",
            und: "@VirgilClyne"
          };
          obj.translationLanguages = Object.entries(languages).map(([k, v]) => new TranslationLanguage({
            languageCode: k,
            languageName: { runs: [{ text: v }] }
          }));
          stack.length = 0;
        });
      }
    };
    var SearchMessage = class extends BrowseMessage {
      constructor(msgType = Search, name = "Search") {
        super(msgType, name);
      }
    };
    var ShortsMessage = class extends YouTubeMessage {
      constructor(msgType = Shorts, name = "Shorts") {
        super(msgType, name);
      }
      pure() {
        const shortsRawLength = this.message.entries?.length;
        if (shortsRawLength) {
          for (let i = shortsRawLength - 1; i >= 0; i--) {
            if (!this.message.entries[i].command?.reelWatchEndpoint?.overlay) {
              this.message.entries.splice(i, 1);
              this.needProcess = true;
            }
          }
        }
        return this;
      }
    };
    var GuideMessage = class extends YouTubeMessage {
      constructor(msgType = Guide, name = "Guide") {
        super(msgType, name);
      }
      pure() {
        const blackList = ["SPunlimited"];
        if (this.argument.blockUpload)
          blackList.push("FEuploads");
        if (this.argument.blockImmersive)
          blackList.push("FEmusic_immersive");
        this.iterate(this.message, "rendererItems", (obj) => {
          for (let i = obj.rendererItems.length - 1; i >= 0; i--) {
            const browseId = obj.rendererItems[i]?.iconRender?.browseId || obj.rendererItems[i]?.labelRender?.browseId;
            if (blackList.includes(browseId)) {
              obj.rendererItems.splice(i, 1);
              this.needProcess = true;
            }
          }
        });
        return this;
      }
    };
    var SettingMessage = class extends YouTubeMessage {
      constructor(msgType = Setting, name = "Setting") {
        super(msgType, name);
      }
      pure() {
        this.iterate(this.message, "categoryId", (obj) => {
          if (obj.categoryId === 10005) {
            const trackingParams = {
              f1: 135,
              f2: 20434,
              f3: 2,
              timeInfo: this.message.trackingParams.timeInfo
            };
            const fakePIPSetting = new SubSetting({
              settingBooleanRenderer: {
                itemId: 0,
                enableServiceEndpoint: {
                  trackingParams,
                  setClientSettingEndpoint: {
                    settingDatas: {
                      clientSettingEnum: { item: 151 },
                      boolValue: true
                    }
                  }
                },
                disableServiceEndpoint: {
                  trackingParams,
                  setClientSettingEndpoint: {
                    settingDatas: {
                      clientSettingEnum: { item: 151 },
                      boolValue: false
                    }
                  }
                },
                clickTrackingParams: trackingParams
              }
            });
            obj.subSettings.push(fakePIPSetting);
          }
        });
        const fakePlayBackgroundSetting = new SettingItem({
          settingCategoryEntryRenderer: {
            f2: 1,
            f3: 1,
            trackingParams: {
              f1: 2,
              f2: 20020,
              f3: 8,
              timeInfo: this.message.trackingParams.timeInfo
            },
            f6: 0,
            f7: 1,
            f8: 1,
            f9: 1,
            f10: 1,
            f12: 1
          }
        });
        this.message.settingItems.push(fakePlayBackgroundSetting);
        this.needProcess = true;
        return this;
      }
    };
    var WatchMessage = class extends YouTubeMessage {
      player;
      next;
      constructor(msgType = Watch, name = "Watch") {
        super(msgType, name);
        this.player = new PlayerMessage();
        this.next = new NextMessage();
      }
      async pure() {
        for (const msg of this.message.contents) {
          if (msg.player) {
            this.player.message = msg.player;
            await this.player.pure();
          }
          if (msg.next) {
            this.next.message = msg.next;
            await this.next.pure();
          }
          this.needProcess = true;
        }
        return this;
      }
    };
  
    // lib/factory.ts
    var messages = /* @__PURE__ */ new Map([
      ["browse", BrowseMessage],
      ["next", NextMessage],
      ["player", PlayerMessage],
      ["search", SearchMessage],
      ["reel_watch_sequence", ShortsMessage],
      ["guide", GuideMessage],
      ["get_setting", SettingMessage],
      ["get_watch", WatchMessage]
    ]);
    function createMessage(url) {
      for (const [path, MessageClass] of messages.entries()) {
        if (url.includes(path)) {
          return new MessageClass();
        }
      }
      return null;
    }
  
    // main-response.ts
    async function run() {
      const responseMsg = createMessage($.request.url);
      if (responseMsg) {
        const body = $.response.bodyBytes;
        $.timeStart("fromBinary");
        responseMsg.fromBinary(body);
        $.timeEnd("fromBinary");
        $.timeStart("modify");
        await responseMsg.modify();
        $.timeEnd("modify");
        responseMsg.done();
      } else {
        $.msg("YouTube Enhance", "\u811A\u672C\u9700\u8981\u66F4\u65B0", "\u5916\u90E8\u8D44\u6E90 -> \u5168\u90E8\u66F4\u65B0");
        $.exit();
      }
    }
    run().catch((e) => {
      $.log(e.toString());
    }).finally(() => {
      $.exit();
    });
  })();
  
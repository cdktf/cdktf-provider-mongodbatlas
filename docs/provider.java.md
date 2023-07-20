# `provider`

Refer to the Terraform Registory for docs: [`mongodbatlas`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-mongodbatlas.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MongodbatlasProvider <a name="MongodbatlasProvider" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs mongodbatlas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.provider.MongodbatlasProvider;

MongodbatlasProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .assumeRole(MongodbatlasProviderAssumeRole)
//  .awsAccessKeyId(java.lang.String)
//  .awsSecretAccessKey(java.lang.String)
//  .awsSessionToken(java.lang.String)
//  .baseUrl(java.lang.String)
//  .isMongodbgovCloud(java.lang.Boolean)
//  .isMongodbgovCloud(IResolvable)
//  .privateKey(java.lang.String)
//  .publicKey(java.lang.String)
//  .realmBaseUrl(java.lang.String)
//  .region(java.lang.String)
//  .secretName(java.lang.String)
//  .stsEndpoint(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.assumeRole">assumeRole</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a></code> | assume_role block. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.awsAccessKeyId">awsAccessKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#aws_access_key_id MongodbatlasProvider#aws_access_key_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#aws_secret_access_key MongodbatlasProvider#aws_secret_access_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.awsSessionToken">awsSessionToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#aws_session_token MongodbatlasProvider#aws_session_token}. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | MongoDB Atlas Base URL. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.isMongodbgovCloud">isMongodbgovCloud</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | MongoDB Atlas Base URL default to gov. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.privateKey">privateKey</a></code> | <code>java.lang.String</code> | MongoDB Atlas Programmatic Private Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.publicKey">publicKey</a></code> | <code>java.lang.String</code> | MongoDB Atlas Programmatic Public Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.realmBaseUrl">realmBaseUrl</a></code> | <code>java.lang.String</code> | MongoDB Realm Base URL. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#region MongodbatlasProvider#region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.secretName">secretName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#secret_name MongodbatlasProvider#secret_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.stsEndpoint">stsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#sts_endpoint MongodbatlasProvider#sts_endpoint}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#alias MongodbatlasProvider#alias}

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.assumeRole"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a>

assume_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#assume_role MongodbatlasProvider#assume_role}

---

##### `awsAccessKeyId`<sup>Optional</sup> <a name="awsAccessKeyId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.awsAccessKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#aws_access_key_id MongodbatlasProvider#aws_access_key_id}.

---

##### `awsSecretAccessKey`<sup>Optional</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.awsSecretAccessKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#aws_secret_access_key MongodbatlasProvider#aws_secret_access_key}.

---

##### `awsSessionToken`<sup>Optional</sup> <a name="awsSessionToken" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.awsSessionToken"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#aws_session_token MongodbatlasProvider#aws_session_token}.

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.baseUrl"></a>

- *Type:* java.lang.String

MongoDB Atlas Base URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#base_url MongodbatlasProvider#base_url}

---

##### `isMongodbgovCloud`<sup>Optional</sup> <a name="isMongodbgovCloud" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.isMongodbgovCloud"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

MongoDB Atlas Base URL default to gov.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#is_mongodbgov_cloud MongodbatlasProvider#is_mongodbgov_cloud}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.privateKey"></a>

- *Type:* java.lang.String

MongoDB Atlas Programmatic Private Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#private_key MongodbatlasProvider#private_key}

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.publicKey"></a>

- *Type:* java.lang.String

MongoDB Atlas Programmatic Public Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#public_key MongodbatlasProvider#public_key}

---

##### `realmBaseUrl`<sup>Optional</sup> <a name="realmBaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.realmBaseUrl"></a>

- *Type:* java.lang.String

MongoDB Realm Base URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#realm_base_url MongodbatlasProvider#realm_base_url}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#region MongodbatlasProvider#region}.

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.secretName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#secret_name MongodbatlasProvider#secret_name}.

---

##### `stsEndpoint`<sup>Optional</sup> <a name="stsEndpoint" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.stsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#sts_endpoint MongodbatlasProvider#sts_endpoint}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAssumeRole">resetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsAccessKeyId">resetAwsAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsSecretAccessKey">resetAwsSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsSessionToken">resetAwsSessionToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetIsMongodbgovCloud">resetIsMongodbgovCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetPublicKey">resetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetRealmBaseUrl">resetRealmBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetSecretName">resetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetStsEndpoint">resetStsEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAssumeRole` <a name="resetAssumeRole" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAssumeRole"></a>

```java
public void resetAssumeRole()
```

##### `resetAwsAccessKeyId` <a name="resetAwsAccessKeyId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsAccessKeyId"></a>

```java
public void resetAwsAccessKeyId()
```

##### `resetAwsSecretAccessKey` <a name="resetAwsSecretAccessKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsSecretAccessKey"></a>

```java
public void resetAwsSecretAccessKey()
```

##### `resetAwsSessionToken` <a name="resetAwsSessionToken" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsSessionToken"></a>

```java
public void resetAwsSessionToken()
```

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetBaseUrl"></a>

```java
public void resetBaseUrl()
```

##### `resetIsMongodbgovCloud` <a name="resetIsMongodbgovCloud" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetIsMongodbgovCloud"></a>

```java
public void resetIsMongodbgovCloud()
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetPrivateKey"></a>

```java
public void resetPrivateKey()
```

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetPublicKey"></a>

```java
public void resetPublicKey()
```

##### `resetRealmBaseUrl` <a name="resetRealmBaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetRealmBaseUrl"></a>

```java
public void resetRealmBaseUrl()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSecretName` <a name="resetSecretName" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetSecretName"></a>

```java
public void resetSecretName()
```

##### `resetStsEndpoint` <a name="resetStsEndpoint" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetStsEndpoint"></a>

```java
public void resetStsEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.provider.MongodbatlasProvider;

MongodbatlasProvider.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.provider.MongodbatlasProvider;

MongodbatlasProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.provider.MongodbatlasProvider;

MongodbatlasProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRoleInput">assumeRoleInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyIdInput">awsAccessKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKeyInput">awsSecretAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionTokenInput">awsSessionTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrlInput">baseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloudInput">isMongodbgovCloudInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKeyInput">publicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrlInput">realmBaseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpointInput">stsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyId">awsAccessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionToken">awsSessionToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloud">isMongodbgovCloud</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrl">realmBaseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpoint">stsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `assumeRoleInput`<sup>Optional</sup> <a name="assumeRoleInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRoleInput"></a>

```java
public MongodbatlasProviderAssumeRole getAssumeRoleInput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a>

---

##### `awsAccessKeyIdInput`<sup>Optional</sup> <a name="awsAccessKeyIdInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyIdInput"></a>

```java
public java.lang.String getAwsAccessKeyIdInput();
```

- *Type:* java.lang.String

---

##### `awsSecretAccessKeyInput`<sup>Optional</sup> <a name="awsSecretAccessKeyInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKeyInput"></a>

```java
public java.lang.String getAwsSecretAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `awsSessionTokenInput`<sup>Optional</sup> <a name="awsSessionTokenInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionTokenInput"></a>

```java
public java.lang.String getAwsSessionTokenInput();
```

- *Type:* java.lang.String

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrlInput"></a>

```java
public java.lang.String getBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `isMongodbgovCloudInput`<sup>Optional</sup> <a name="isMongodbgovCloudInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloudInput"></a>

```java
public java.lang.Object getIsMongodbgovCloudInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKeyInput"></a>

```java
public java.lang.String getPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `realmBaseUrlInput`<sup>Optional</sup> <a name="realmBaseUrlInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrlInput"></a>

```java
public java.lang.String getRealmBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `stsEndpointInput`<sup>Optional</sup> <a name="stsEndpointInput" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpointInput"></a>

```java
public java.lang.String getStsEndpointInput();
```

- *Type:* java.lang.String

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRole"></a>

```java
public MongodbatlasProviderAssumeRole getAssumeRole();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a>

---

##### `awsAccessKeyId`<sup>Optional</sup> <a name="awsAccessKeyId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyId"></a>

```java
public java.lang.String getAwsAccessKeyId();
```

- *Type:* java.lang.String

---

##### `awsSecretAccessKey`<sup>Optional</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKey"></a>

```java
public java.lang.String getAwsSecretAccessKey();
```

- *Type:* java.lang.String

---

##### `awsSessionToken`<sup>Optional</sup> <a name="awsSessionToken" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionToken"></a>

```java
public java.lang.String getAwsSessionToken();
```

- *Type:* java.lang.String

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `isMongodbgovCloud`<sup>Optional</sup> <a name="isMongodbgovCloud" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloud"></a>

```java
public java.lang.Object getIsMongodbgovCloud();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `realmBaseUrl`<sup>Optional</sup> <a name="realmBaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrl"></a>

```java
public java.lang.String getRealmBaseUrl();
```

- *Type:* java.lang.String

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `stsEndpoint`<sup>Optional</sup> <a name="stsEndpoint" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpoint"></a>

```java
public java.lang.String getStsEndpoint();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MongodbatlasProviderAssumeRole <a name="MongodbatlasProviderAssumeRole" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.provider.MongodbatlasProviderAssumeRole;

MongodbatlasProviderAssumeRole.builder()
//  .duration(java.lang.String)
//  .durationSeconds(java.lang.Number)
//  .externalId(java.lang.String)
//  .policy(java.lang.String)
//  .policyArns(java.util.List<java.lang.String>)
//  .roleArn(java.lang.String)
//  .sessionName(java.lang.String)
//  .sourceIdentity(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .transitiveTagKeys(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.duration">duration</a></code> | <code>java.lang.String</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | The duration, in seconds, of the role session. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.externalId">externalId</a></code> | <code>java.lang.String</code> | A unique identifier that might be required when you assume a role in another account. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policy">policy</a></code> | <code>java.lang.String</code> | IAM Policy JSON describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policyArns">policyArns</a></code> | <code>java.util.List<java.lang.String></code> | Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sessionName">sessionName</a></code> | <code>java.lang.String</code> | An identifier for the assumed role session. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sourceIdentity">sourceIdentity</a></code> | <code>java.lang.String</code> | Source identity specified by the principal assuming the role. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Assume role session tags. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.transitiveTagKeys">transitiveTagKeys</a></code> | <code>java.util.List<java.lang.String></code> | Assume role session tag keys to pass to any subsequent sessions. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#duration MongodbatlasProvider#duration}

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.durationSeconds"></a>

```java
public java.lang.Number getDurationSeconds();
```

- *Type:* java.lang.Number

The duration, in seconds, of the role session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#duration_seconds MongodbatlasProvider#duration_seconds}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

A unique identifier that might be required when you assume a role in another account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#external_id MongodbatlasProvider#external_id}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#policy MongodbatlasProvider#policy}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policyArns"></a>

```java
public java.util.List<java.lang.String> getPolicyArns();
```

- *Type:* java.util.List<java.lang.String>

Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#policy_arns MongodbatlasProvider#policy_arns}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#role_arn MongodbatlasProvider#role_arn}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sessionName"></a>

```java
public java.lang.String getSessionName();
```

- *Type:* java.lang.String

An identifier for the assumed role session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#session_name MongodbatlasProvider#session_name}

---

##### `sourceIdentity`<sup>Optional</sup> <a name="sourceIdentity" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sourceIdentity"></a>

```java
public java.lang.String getSourceIdentity();
```

- *Type:* java.lang.String

Source identity specified by the principal assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#source_identity MongodbatlasProvider#source_identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Assume role session tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#tags MongodbatlasProvider#tags}

---

##### `transitiveTagKeys`<sup>Optional</sup> <a name="transitiveTagKeys" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.transitiveTagKeys"></a>

```java
public java.util.List<java.lang.String> getTransitiveTagKeys();
```

- *Type:* java.util.List<java.lang.String>

Assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#transitive_tag_keys MongodbatlasProvider#transitive_tag_keys}

---

### MongodbatlasProviderConfig <a name="MongodbatlasProviderConfig" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.provider.MongodbatlasProviderConfig;

MongodbatlasProviderConfig.builder()
//  .alias(java.lang.String)
//  .assumeRole(MongodbatlasProviderAssumeRole)
//  .awsAccessKeyId(java.lang.String)
//  .awsSecretAccessKey(java.lang.String)
//  .awsSessionToken(java.lang.String)
//  .baseUrl(java.lang.String)
//  .isMongodbgovCloud(java.lang.Boolean)
//  .isMongodbgovCloud(IResolvable)
//  .privateKey(java.lang.String)
//  .publicKey(java.lang.String)
//  .realmBaseUrl(java.lang.String)
//  .region(java.lang.String)
//  .secretName(java.lang.String)
//  .stsEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a></code> | assume_role block. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsAccessKeyId">awsAccessKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#aws_access_key_id MongodbatlasProvider#aws_access_key_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#aws_secret_access_key MongodbatlasProvider#aws_secret_access_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSessionToken">awsSessionToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#aws_session_token MongodbatlasProvider#aws_session_token}. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | MongoDB Atlas Base URL. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.isMongodbgovCloud">isMongodbgovCloud</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | MongoDB Atlas Base URL default to gov. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | MongoDB Atlas Programmatic Private Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | MongoDB Atlas Programmatic Public Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.realmBaseUrl">realmBaseUrl</a></code> | <code>java.lang.String</code> | MongoDB Realm Base URL. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#region MongodbatlasProvider#region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#secret_name MongodbatlasProvider#secret_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.stsEndpoint">stsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#sts_endpoint MongodbatlasProvider#sts_endpoint}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#alias MongodbatlasProvider#alias}

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.assumeRole"></a>

```java
public MongodbatlasProviderAssumeRole getAssumeRole();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a>

assume_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#assume_role MongodbatlasProvider#assume_role}

---

##### `awsAccessKeyId`<sup>Optional</sup> <a name="awsAccessKeyId" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsAccessKeyId"></a>

```java
public java.lang.String getAwsAccessKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#aws_access_key_id MongodbatlasProvider#aws_access_key_id}.

---

##### `awsSecretAccessKey`<sup>Optional</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSecretAccessKey"></a>

```java
public java.lang.String getAwsSecretAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#aws_secret_access_key MongodbatlasProvider#aws_secret_access_key}.

---

##### `awsSessionToken`<sup>Optional</sup> <a name="awsSessionToken" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSessionToken"></a>

```java
public java.lang.String getAwsSessionToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#aws_session_token MongodbatlasProvider#aws_session_token}.

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

MongoDB Atlas Base URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#base_url MongodbatlasProvider#base_url}

---

##### `isMongodbgovCloud`<sup>Optional</sup> <a name="isMongodbgovCloud" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.isMongodbgovCloud"></a>

```java
public java.lang.Object getIsMongodbgovCloud();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

MongoDB Atlas Base URL default to gov.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#is_mongodbgov_cloud MongodbatlasProvider#is_mongodbgov_cloud}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

MongoDB Atlas Programmatic Private Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#private_key MongodbatlasProvider#private_key}

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

MongoDB Atlas Programmatic Public Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#public_key MongodbatlasProvider#public_key}

---

##### `realmBaseUrl`<sup>Optional</sup> <a name="realmBaseUrl" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.realmBaseUrl"></a>

```java
public java.lang.String getRealmBaseUrl();
```

- *Type:* java.lang.String

MongoDB Realm Base URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#realm_base_url MongodbatlasProvider#realm_base_url}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#region MongodbatlasProvider#region}.

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#secret_name MongodbatlasProvider#secret_name}.

---

##### `stsEndpoint`<sup>Optional</sup> <a name="stsEndpoint" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.stsEndpoint"></a>

```java
public java.lang.String getStsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs#sts_endpoint MongodbatlasProvider#sts_endpoint}.

---




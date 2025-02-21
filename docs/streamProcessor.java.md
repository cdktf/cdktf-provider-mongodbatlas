# `streamProcessor` Submodule <a name="`streamProcessor` Submodule" id="@cdktf/provider-mongodbatlas.streamProcessor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamProcessor <a name="StreamProcessor" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/stream_processor mongodbatlas_stream_processor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_processor.StreamProcessor;

StreamProcessor.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .instanceName(java.lang.String)
    .pipeline(java.lang.String)
    .processorName(java.lang.String)
    .projectId(java.lang.String)
//  .options(StreamProcessorOptions)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.instanceName">instanceName</a></code> | <code>java.lang.String</code> | Human-readable label that identifies the stream instance. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.pipeline">pipeline</a></code> | <code>java.lang.String</code> | Stream aggregation pipeline you want to apply to your streaming data. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.processorName">processorName</a></code> | <code>java.lang.String</code> | Human-readable label that identifies the stream processor. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions">StreamProcessorOptions</a></code> | Optional configuration for the stream processor. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | The state of the stream processor. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.instanceName"></a>

- *Type:* java.lang.String

Human-readable label that identifies the stream instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/stream_processor#instance_name StreamProcessor#instance_name}

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.pipeline"></a>

- *Type:* java.lang.String

Stream aggregation pipeline you want to apply to your streaming data.

[MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/atlas-stream-processing/stream-aggregation/#std-label-stream-aggregation) contain more information. Using [jsonencode](https://developer.hashicorp.com/terraform/language/functions/jsonencode) is recommended when setting this attribute. For more details see the [Aggregation Pipelines Documentation](https://www.mongodb.com/docs/atlas/atlas-stream-processing/stream-aggregation/)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/stream_processor#pipeline StreamProcessor#pipeline}

---

##### `processorName`<sup>Required</sup> <a name="processorName" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.processorName"></a>

- *Type:* java.lang.String

Human-readable label that identifies the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/stream_processor#processor_name StreamProcessor#processor_name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/stream_processor#project_id StreamProcessor#project_id}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions">StreamProcessorOptions</a>

Optional configuration for the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/stream_processor#options StreamProcessor#options}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.Initializer.parameter.state"></a>

- *Type:* java.lang.String

The state of the stream processor.

Commonly occurring states are 'CREATED', 'STARTED', 'STOPPED' and 'FAILED'. Used to start or stop the Stream Processor. Valid values are `CREATED`, `STARTED` or `STOPPED`. When a Stream Processor is created without specifying the state, it will default to `CREATED` state.

**NOTE** When creating a stream processor, setting the state to STARTED can automatically start the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/stream_processor#state StreamProcessor#state}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptions` <a name="putOptions" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.putOptions"></a>

```java
public void putOptions(StreamProcessorOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions">StreamProcessorOptions</a>

---

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamProcessor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_processor.StreamProcessor;

StreamProcessor.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_processor.StreamProcessor;

StreamProcessor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_processor.StreamProcessor;

StreamProcessor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_processor.StreamProcessor;

StreamProcessor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StreamProcessor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StreamProcessor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StreamProcessor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StreamProcessor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/stream_processor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StreamProcessor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.options">options</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference">StreamProcessorOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.stats">stats</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.instanceNameInput">instanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.optionsInput">optionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions">StreamProcessorOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.pipelineInput">pipelineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.processorNameInput">processorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.pipeline">pipeline</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.processorName">processorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.options"></a>

```java
public StreamProcessorOptionsOutputReference getOptions();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference">StreamProcessorOptionsOutputReference</a>

---

##### `stats`<sup>Required</sup> <a name="stats" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.stats"></a>

```java
public java.lang.String getStats();
```

- *Type:* java.lang.String

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.instanceNameInput"></a>

```java
public java.lang.String getInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.optionsInput"></a>

```java
public java.lang.Object getOptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions">StreamProcessorOptions</a>

---

##### `pipelineInput`<sup>Optional</sup> <a name="pipelineInput" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.pipelineInput"></a>

```java
public java.lang.String getPipelineInput();
```

- *Type:* java.lang.String

---

##### `processorNameInput`<sup>Optional</sup> <a name="processorNameInput" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.processorNameInput"></a>

```java
public java.lang.String getProcessorNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.pipeline"></a>

```java
public java.lang.String getPipeline();
```

- *Type:* java.lang.String

---

##### `processorName`<sup>Required</sup> <a name="processorName" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.processorName"></a>

```java
public java.lang.String getProcessorName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StreamProcessorConfig <a name="StreamProcessorConfig" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_processor.StreamProcessorConfig;

StreamProcessorConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .instanceName(java.lang.String)
    .pipeline(java.lang.String)
    .processorName(java.lang.String)
    .projectId(java.lang.String)
//  .options(StreamProcessorOptions)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | Human-readable label that identifies the stream instance. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.pipeline">pipeline</a></code> | <code>java.lang.String</code> | Stream aggregation pipeline you want to apply to your streaming data. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.processorName">processorName</a></code> | <code>java.lang.String</code> | Human-readable label that identifies the stream processor. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions">StreamProcessorOptions</a></code> | Optional configuration for the stream processor. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.state">state</a></code> | <code>java.lang.String</code> | The state of the stream processor. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

Human-readable label that identifies the stream instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/stream_processor#instance_name StreamProcessor#instance_name}

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.pipeline"></a>

```java
public java.lang.String getPipeline();
```

- *Type:* java.lang.String

Stream aggregation pipeline you want to apply to your streaming data.

[MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/atlas-stream-processing/stream-aggregation/#std-label-stream-aggregation) contain more information. Using [jsonencode](https://developer.hashicorp.com/terraform/language/functions/jsonencode) is recommended when setting this attribute. For more details see the [Aggregation Pipelines Documentation](https://www.mongodb.com/docs/atlas/atlas-stream-processing/stream-aggregation/)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/stream_processor#pipeline StreamProcessor#pipeline}

---

##### `processorName`<sup>Required</sup> <a name="processorName" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.processorName"></a>

```java
public java.lang.String getProcessorName();
```

- *Type:* java.lang.String

Human-readable label that identifies the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/stream_processor#processor_name StreamProcessor#processor_name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/stream_processor#project_id StreamProcessor#project_id}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.options"></a>

```java
public StreamProcessorOptions getOptions();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions">StreamProcessorOptions</a>

Optional configuration for the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/stream_processor#options StreamProcessor#options}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

The state of the stream processor.

Commonly occurring states are 'CREATED', 'STARTED', 'STOPPED' and 'FAILED'. Used to start or stop the Stream Processor. Valid values are `CREATED`, `STARTED` or `STOPPED`. When a Stream Processor is created without specifying the state, it will default to `CREATED` state.

**NOTE** When creating a stream processor, setting the state to STARTED can automatically start the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/stream_processor#state StreamProcessor#state}

---

### StreamProcessorOptions <a name="StreamProcessorOptions" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_processor.StreamProcessorOptions;

StreamProcessorOptions.builder()
    .dlq(StreamProcessorOptionsDlq)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions.property.dlq">dlq</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq">StreamProcessorOptionsDlq</a></code> | Dead letter queue for the stream processor. Refer to the [MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/reference/glossary/#std-term-dead-letter-queue) for more information. |

---

##### `dlq`<sup>Required</sup> <a name="dlq" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions.property.dlq"></a>

```java
public StreamProcessorOptionsDlq getDlq();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq">StreamProcessorOptionsDlq</a>

Dead letter queue for the stream processor. Refer to the [MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/reference/glossary/#std-term-dead-letter-queue) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/stream_processor#dlq StreamProcessor#dlq}

---

### StreamProcessorOptionsDlq <a name="StreamProcessorOptionsDlq" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_processor.StreamProcessorOptionsDlq;

StreamProcessorOptionsDlq.builder()
    .coll(java.lang.String)
    .connectionName(java.lang.String)
    .db(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq.property.coll">coll</a></code> | <code>java.lang.String</code> | Name of the collection to use for the DLQ. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | Name of the connection to write DLQ messages to. Must be an Atlas connection. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq.property.db">db</a></code> | <code>java.lang.String</code> | Name of the database to use for the DLQ. |

---

##### `coll`<sup>Required</sup> <a name="coll" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq.property.coll"></a>

```java
public java.lang.String getColl();
```

- *Type:* java.lang.String

Name of the collection to use for the DLQ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/stream_processor#coll StreamProcessor#coll}

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

Name of the connection to write DLQ messages to. Must be an Atlas connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/stream_processor#connection_name StreamProcessor#connection_name}

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq.property.db"></a>

```java
public java.lang.String getDb();
```

- *Type:* java.lang.String

Name of the database to use for the DLQ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/stream_processor#db StreamProcessor#db}

---

## Classes <a name="Classes" id="Classes"></a>

### StreamProcessorOptionsDlqOutputReference <a name="StreamProcessorOptionsDlqOutputReference" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_processor.StreamProcessorOptionsDlqOutputReference;

new StreamProcessorOptionsDlqOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.collInput">collInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.dbInput">dbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.coll">coll</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.db">db</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq">StreamProcessorOptionsDlq</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `collInput`<sup>Optional</sup> <a name="collInput" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.collInput"></a>

```java
public java.lang.String getCollInput();
```

- *Type:* java.lang.String

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `dbInput`<sup>Optional</sup> <a name="dbInput" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.dbInput"></a>

```java
public java.lang.String getDbInput();
```

- *Type:* java.lang.String

---

##### `coll`<sup>Required</sup> <a name="coll" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.coll"></a>

```java
public java.lang.String getColl();
```

- *Type:* java.lang.String

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.db"></a>

```java
public java.lang.String getDb();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq">StreamProcessorOptionsDlq</a>

---


### StreamProcessorOptionsOutputReference <a name="StreamProcessorOptionsOutputReference" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_processor.StreamProcessorOptionsOutputReference;

new StreamProcessorOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.putDlq">putDlq</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDlq` <a name="putDlq" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.putDlq"></a>

```java
public void putDlq(StreamProcessorOptionsDlq value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.putDlq.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq">StreamProcessorOptionsDlq</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.dlq">dlq</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference">StreamProcessorOptionsDlqOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.dlqInput">dlqInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq">StreamProcessorOptionsDlq</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions">StreamProcessorOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dlq`<sup>Required</sup> <a name="dlq" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.dlq"></a>

```java
public StreamProcessorOptionsDlqOutputReference getDlq();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlqOutputReference">StreamProcessorOptionsDlqOutputReference</a>

---

##### `dlqInput`<sup>Optional</sup> <a name="dlqInput" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.dlqInput"></a>

```java
public java.lang.Object getDlqInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsDlq">StreamProcessorOptionsDlq</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamProcessor.StreamProcessorOptions">StreamProcessorOptions</a>

---



